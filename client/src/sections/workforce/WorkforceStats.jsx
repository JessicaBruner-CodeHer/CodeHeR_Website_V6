import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import axios from 'axios'
import { workforceStatsContent as c } from '@/assets/constants/serviceContent'

const COLOR_MAP = {
  warm: 'var(--color-accent)',
  gold: 'var(--color-primary)',
  cool: '#5B9EC9',
}

// Parses a stat value string like "6,492,000" or "3.9" into a number
function parseStatValue(raw) {
  if (!raw) return 0
  return parseFloat(String(raw).replace(/,/g, ''))
}

// Formats a number back to match the original string format
function formatStatValue(num, originalValue) {
  if (!originalValue) return String(Math.round(num))
  const hasDecimal = String(originalValue).includes('.')
  const hasCommas  = String(originalValue).includes(',')
  if (hasDecimal) return num.toFixed(1)
  if (hasCommas)  return Math.round(num).toLocaleString('en-US')
  return String(Math.round(num))
}

function AnimatedNumber({ value, suffix, prefix, color }) {
  const motionValue = useMotionValue(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState('0')
  const target = parseStatValue(value)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(formatStatValue(v, value)),
    })
    return controls.stop
  }, [inView, target, value, motionValue])

  return (
    <span ref={ref} style={{ color, fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>
      {prefix}{display}{suffix}
    </span>
  )
}

function StatCard({ stat, value, index }) {
  const color = COLOR_MAP[stat.color] ?? COLOR_MAP.gold

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display:        'flex',
        flexDirection:  'column',
        gap:            '0.75rem',
        padding:        '2.25rem',
        background:     'var(--color-bg-warm)',
        border:         `1px solid rgba(201,151,58,0.15)`,
        borderRadius:   'var(--radius-lg)',
        borderTop:      `3px solid ${color}`,
      }}
    >
      <AnimatedNumber value={value} suffix={stat.suffix} prefix={stat.prefix} color={color} />
      <p style={{ color: 'var(--color-text-light)', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>
        {stat.label}
      </p>
      <p style={{ color: 'var(--color-text-faint)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
        {stat.context}
      </p>
    </motion.div>
  )
}

function SkeletonCard() {
  return (
    <div style={{
      padding: '2.25rem', background: 'var(--color-bg-warm)',
      border: '1px solid rgba(201,151,58,0.1)', borderRadius: 'var(--radius-lg)',
      display: 'flex', flexDirection: 'column', gap: '0.75rem',
    }}>
      <div style={{ height: '2.75rem', width: '60%', background: 'rgba(255,255,255,0.06)', borderRadius: 6, animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '1rem',    width: '75%', background: 'rgba(255,255,255,0.04)', borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite 0.2s' }} />
      <div style={{ height: '0.875rem',width: '90%', background: 'rgba(255,255,255,0.04)', borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite 0.4s' }} />
    </div>
  )
}

export default function WorkforceStats() {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(false)

  useEffect(() => {
    axios.get('/api/workforce-stats')
      .then(res => { setData(res.data); setLoading(false) })
      .catch(() => { setError(true);    setLoading(false) })
  }, [])

  return (
    <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-bg-main)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '40rem', marginBottom: '3.5rem' }}
        >
          <p style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {c.eyebrow}
          </p>
          <h2 style={{ color: 'var(--color-text-light)', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {c.headline}
          </h2>
          <p style={{ color: 'var(--color-text-faint)', fontSize: '1.1rem', lineHeight: 1.75 }}>
            {c.subtext}
          </p>
        </motion.div>

        {/* Grid */}
        {error ? (
          <div style={{ color: 'var(--color-text-faint)', fontSize: '0.9rem', padding: '2rem 0' }}>
            Live data is temporarily unavailable. Check back shortly.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="grid-cols-1 sm:grid-cols-2">
            {loading
              ? c.stats.map((_, i) => <SkeletonCard key={i} />)
              : c.stats.map((stat, i) => (
                  <StatCard
                    key={stat.id}
                    stat={stat}
                    value={data?.[stat.id] ?? '0'}
                    index={i}
                  />
                ))
            }
          </div>
        )}

        {/* Source note */}
        {!error && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <p style={{ color: 'var(--color-text-faint)', fontSize: '0.8rem', margin: 0 }}>
              {c.sourceNote}
            </p>
            {data?.lastUpdated && (
              <p style={{ color: 'var(--color-text-faint)', fontSize: '0.8rem', margin: 0 }}>
                Last updated: <span style={{ color: 'var(--color-primary)' }}>{data.lastUpdated}</span>
              </p>
            )}
          </motion.div>
        )}

      </div>
    </section>
  )
}
