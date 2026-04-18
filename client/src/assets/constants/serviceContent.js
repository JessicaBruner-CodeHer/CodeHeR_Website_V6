/* ============================================================
   CodeHeR V5 — Service Page Content
   ============================================================ */

// ── Workforce Consulting Page ────────────────────────────────
export const workforcePageContent = {
  seo: {
    title:       'Business Consulting',
    description: 'CodeHeR reviews your hiring practices end-to-end, identifies where qualified candidates are being filtered out, and delivers clear recommendations to close your talent gaps.',
  },
  hero: {
    eyebrow:  'Business Consulting',
    headline: 'The Intersection of workforce gaps and people.',
    subtext:  '',
  },
  whatItIs: {
    headline: 'That What',
    body: [
      'We identify workforce gaps, review current processes, and build sustainable programs to bridge the gap between talent and opportunity.',
    ],
  },
  process: {
    headline: 'What to Expect',
    steps: [
      { title: 'Consultation',      body: 'We start with a focused call to identify your needs, challenges, and what success looks like for your business.' },
      { title: 'Strategy',          body: 'We build a tailored strategy that aligns directly with your business goals and the gaps you need to close.' },
      { title: 'Process Review',    body: 'We go through your current processes and policies in detail — every document, every step, every friction point.' },
      { title: 'Recommendations',   body: 'We walk you through clear, prioritized recommendations — specific, actionable, and grounded in what we found.' },
      { title: 'Implementation',    body: 'We implement the agreed-upon changes with you and launch a sustainable program built to last.' },
      { title: 'Ongoing Support',   body: 'We stay with you — making adjustments as needed and helping you track the KPIs and ROI that prove the program is working.' },
    ],
  },
  whoItsFor: {
    headline: '',
    items: [
      '',
    ],
  },
  cta: {
    headline: 'Let\'s Close the Gap Together',
    label:    'Request a Consultation',
  },
}

// ── Workforce Stats Section ──────────────────────────────────
export const workforceStatsContent = {
  eyebrow:  'The Numbers Are Real',
  headline: 'The Data that drives our Passion.',
  subtext:  'These are live figures from the U.S. Bureau of Labor Statistics, updated monthly.',
  stats: [
    {
      id:      'unemployedPersons',
      label:   'People Unemployed',
      suffix:  '',
      prefix:  '',
      context: 'Americans currently without work',
      color:   'warm',
    },
    {
      id:      'jobOpenings',
      label:   'Open Jobs',
      suffix:  '',
      prefix:  '',
      context: 'positions employers cannot fill right now',
      color:   'gold',
    },
  ],
  sourceNote: 'Data sourced live from the U.S. Bureau of Labor Statistics public API. Updated monthly.',
}

// ── Digital Solutions Page ───────────────────────────────────
export const digitalPageContent = {
  seo: {
    title:       'Digital Solutions',
    description: 'Professional website development, rebuilds, hosting and support. CodeHeR builds digital presence that reflects the quality of your business.',
  },
  hero: {
    eyebrow:  'Digital Solutions',
    headline: 'The Intersection of Technology.',
    subtext:  'Digital solutions that meet your web service needs.',
  },
  services: [
    {
      icon:  'Code',
      title: 'New Website Builds',
      body:  'From concept to launch — we design and build professional sites tailored to your business goals and audience.',
    },
    {
      icon:  'RefreshCw',
      title: 'Website Rebuilds',
      body:  'Outdated site holding you back? We rebuild from the ground up with modern tech, better performance, and a design that fits where you are now.',
    },
    {
      icon:  'Server',
      title: 'Hosting & Support',
      body:  'We handle the technical side — hosting, updates, security, and ongoing support — so you can focus on running your business.',
    },
  ],
  portfolio: {
    headline: 'Recent work',
    subtext:  'Just a glimpse of what is possible with CodeHe{R} LLC',
    // Projects will be added here when ready
    projects: [
      { id: 1, title: 'Restaurant & Dining',   tags: ['New build'],  url: null, image: '/src/assets/images/portfolio-restaurant.svg',  description: 'Farm-to-table restaurant site with online reservations and seasonal menu showcase.' },
      { id: 2, title: 'SaaS Dashboard',        tags: ['New build'],  url: null, image: '/src/assets/images/portfolio-saas.svg',         description: 'Analytics platform with live metrics, revenue tracking, and team management.' },
      { id: 3, title: 'E-Commerce Store',      tags: ['E-commerce'], url: null, image: '/src/assets/images/portfolio-ecommerce.svg',    description: 'Full-featured online store with product catalog, cart, and checkout flow.' },
      { id: 4, title: 'Fitness & Wellness',    tags: ['New build'],  url: null, image: '/src/assets/images/portfolio-fitness.svg',      description: 'Gym membership site with class schedules, trainer profiles, and free trial signup.' },
      { id: 5, title: 'Nonprofit Organization',tags: ['New build'],  url: null, image: '/src/assets/images/portfolio-nonprofit.svg',    description: 'Community impact site with donation flow, program highlights, and annual reporting.' },
      { id: 6, title: 'Real Estate Listings',  tags: ['New build'],  url: null, image: '/src/assets/images/portfolio-realestate.svg',   description: 'Property search platform with map view, listing cards, and lead capture.' },
    ],
  },
  cta: {
    headline: 'Ready to build something great?',
    label:    'Request a Quote',
  },
}
