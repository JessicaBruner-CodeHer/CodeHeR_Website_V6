# CodeHeR Website V5

React 19 + Vite + Tailwind v4 monorepo.

## Quick start

```bash
# 1. Install all dependencies (root + client + server)
npm run install:all

# 2. Copy env file and fill in your SMTP credentials
cp .env.example .env

# 3. Run both client and server concurrently
npm run dev
```

- Client: http://localhost:3000
- Server: http://localhost:5000

## Structure

```
CodeHeR_Website_V5/
├── client/               # React + Vite frontend
│   └── src/
│       ├── assets/constants/   ← All site copy lives here
│       ├── components/         ← Form components
│       ├── hooks/              ← useModal, useSeo
│       ├── layout/             ← Navbar, Footer
│       ├── pages/              ← Home, About, Services
│       ├── sections/           ← Page sections (Hero, Mission, etc.)
│       ├── styles/             ← globals.css (Tailwind + CSS vars)
│       └── ui/                 ← Reusable primitives
├── server/               # Express API
│   └── src/index.js      ← Quote form endpoint
├── .env.example
└── package.json          ← Root — npm run dev starts both
```

## Updating content

All visible copy is in `client/src/assets/constants/`:
- `siteContent.js`   — navbar, hero, services teaser, mission, footer, quote form
- `serviceContent.js` — workforce and digital service pages
- `aboutContent.js`  — about page

## Adding portfolio projects (Digital Solutions page)

Edit `serviceContent.js` → `digitalPageContent.portfolio.projects`:

```js
{ id: 1, title: 'Client Name', tags: ['New build'], url: 'https://...', image: '/portfolio/client.jpg', description: 'Short description.' }
```

Place images in `client/public/portfolio/`.

## Environment variables

See `.env.example`. Copy to `.env` and fill in SMTP credentials before the contact form will send email.

## Git remote

```bash
git init
git remote add origin https://github.com/JessicaBruner-CodeHer/CodeHeR_Website_V5.git
git add .
git commit -m "feat: initial V5 scaffold"
git push -u origin main
```
"# CodeHeR_Website_V5" 
"# CodeHeR_Website_V6" 
