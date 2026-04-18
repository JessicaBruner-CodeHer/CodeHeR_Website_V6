import express  from 'express'
import cors      from 'cors'
import dotenv    from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app  = express()
const PORT = process.env.PORT ?? 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:3000' }))
app.use(express.json())

// ── Health check ────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ── Quote form submission ────────────────────────────────────
app.post('/api/quote', async (req, res) => {
  const { name, email, company, service, message } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    // Configure transporter via env vars (see .env.example)
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from:    `"CodeHeR Website" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New quote request — ${service}`,
      html: `
        <h2>New quote request from CodeHeR website</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td>    <td>${name}</td></tr>
          <tr><td><strong>Email</strong></td>   <td>${email}</td></tr>
          <tr><td><strong>Company</strong></td> <td>${company || '—'}</td></tr>
          <tr><td><strong>Service</strong></td> <td>${service}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })

    return res.json({ success: true })
  } catch (err) {
    console.error('[quote] Email send failed:', err)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

// ── BLS Workforce Stats ─────────────────────────────────────
const BLS_SERIES = [
  'LNS14000000',   // unemployment rate
  'LNS13000000',   // number unemployed (thousands)
  'JTS00000000JOL', // job openings (thousands)
  'LNS13008396',   // long-term unemployed 27+ weeks (thousands)
]

const BLS_FALLBACK = {
  unemploymentRate:    '4.1',
  unemployedPersons:   '6,800,000',
  jobOpenings:         '8,600,000',
  longTermUnemployed:  '1,600,000',
  lastUpdated:         'March 2025',
  source:              'U.S. Bureau of Labor Statistics',
}

let blsCache = null
let blsCacheTime = 0
const BLS_TTL = 60 * 60 * 1000 // 1 hour

function formatThousands(rawValue) {
  const num = Math.round(parseFloat(rawValue) * 1000)
  return num.toLocaleString('en-US')
}

app.get('/api/workforce-stats', async (_req, res) => {
  if (blsCache && Date.now() - blsCacheTime < BLS_TTL) {
    return res.json(blsCache)
  }

  try {
    const body = {
      seriesid:  BLS_SERIES,
      latest:    true,
      registrationkey: process.env.BLS_API_KEY,
    }

    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    })

    const json = await response.json()

    if (json.status !== 'REQUEST_SUCCEEDED') {
      console.warn('[bls] API returned non-success status:', json.status, json.message)
      return res.json(blsCache ?? BLS_FALLBACK)
    }

    const byId = {}
    for (const series of json.Results.series) {
      const latest = series.data?.[0]
      if (latest) byId[series.seriesID] = latest
    }

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const latestEntry = byId['LNS14000000'] ?? byId['LNS13000000']
    const periodLabel = latestEntry
      ? `${monthNames[parseInt(latestEntry.period.replace('M',''), 10) - 1]} ${latestEntry.year}`
      : BLS_FALLBACK.lastUpdated

    blsCache = {
      unemploymentRate:   byId['LNS14000000']   ? byId['LNS14000000'].value   : BLS_FALLBACK.unemploymentRate,
      unemployedPersons:  byId['LNS13000000']   ? formatThousands(byId['LNS13000000'].value)   : BLS_FALLBACK.unemployedPersons,
      jobOpenings:        byId['JTS00000000JOL'] ? formatThousands(byId['JTS00000000JOL'].value) : BLS_FALLBACK.jobOpenings,
      longTermUnemployed: byId['LNS13008396']   ? formatThousands(byId['LNS13008396'].value)   : BLS_FALLBACK.longTermUnemployed,
      lastUpdated:        periodLabel,
      source:             'U.S. Bureau of Labor Statistics',
    }
    blsCacheTime = Date.now()

    return res.json(blsCache)
  } catch (err) {
    console.error('[bls] Fetch failed:', err.message)
    return res.json(blsCache ?? BLS_FALLBACK)
  }
})

app.listen(PORT, () => {
  console.log(`\x1b[33m[server]\x1b[0m listening on http://localhost:${PORT}`)
})
