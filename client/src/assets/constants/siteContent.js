/* ============================================================
   CodeHeR V5 — Site Content
   All visible copy lives here. Edit this file to update text.
   ============================================================ */

// ── Navbar ──────────────────────────────────────────────────
export const navbarContent = {
  logoText: 'CodeHe{R} LLC',
  links: [
    { label: 'Home',              href: '/' },
    { label: 'Business Solutions', href: '/services/workforce' },
    { label: 'Digital Solutions', href: '/services/digital' },
    { label: 'About',             href: '/about' },
  ],
  ctaLabel: 'Get a Quote',
}

// ── Hero ─────────────────────────────────────────────────────
export const heroContent = {
  label:      'Business Solutions and Innovation',
  eyebrow:    'Workforce Consulting · Web Development',
  headline:   'Your Business.\nOur Solutions.',
  subheadline: 'Where workforce strategy meets economic impact.',
  primaryCta:   { label: 'Get a Quote',        href: null },        // opens modal
  secondaryCta: { label: 'See Our Services',   href: '#services' },
}

// ── Services (landing teaser) ────────────────────────────────
export const servicesTeaserContent = {
  eyebrow:  'What We Do',
  headline: 'Business Innovation.',
  subtext:  'Driving results with strategic solutions that work for you.',
  services: [
    {
      id:          'workforce',
      icon:        'Users',
      label:       'Business Consulting',
      tagline:     'Building bridges between people and policies.',
      description: 'Identifying workforce gaps through policies, systems, and processes. We build sustainable workforce programs that connect the right people to the right opportunities — and keep them there.',
      cta:         { label: 'Learn more', href: '/services/workforce' },
    },
    {
      id:          'digital',
      icon:        'Monitor',
      label:       'Digital Solutions',
      tagline:     'Web services that align your web goals with your budget.',
      description: 'Professional web builds, rebuilds, hosting and ongoing support. We create digital presence that reflects the quality of your business.',
      cta:         { label: 'Learn more', href: '/services/digital' },
    },
  ],
}

// ── Mission / Impact Block ───────────────────────────────────
export const missionContent = {
  eyebrow:   'Why CodeHeR',
  statement: 'Strategic thinking. Practical execution. Meaningful change.',
  pillars: [
    {
      icon:  'Target',
      title: 'Intentional',
      body:  'We understand that your business is unique, and we tailor our approach to meet your specific needs.',
    },
    {
      icon:  'Shield',
      title: 'Accountable',
      body:  'Together we discover the reason behind challenges and create solutions that work.',
    },
    {
      icon:  'Zap',
      title: 'Practical',
      body:  'Our deliverables are actionable. You walk away with a clear path forward, not just a report.',
    },
  ],
}

// ── About Teaser (landing) ───────────────────────────────────
export const aboutTeaserContent = {
  eyebrow:  'About CodeHeR',
  headline: 'Built at the intersection of people and technology.',
  body:     'CodeHe{R} LLC was founded with a passion to bridge a gap between economic stability and business growth. We are dedicated to providing business solutions that bring the needs of people and sustainable solutions together for powerful outcomes. Whether you are trying to solve for workforce shortages or you need to change your digital strategy, CodeHe{R} LLC is dedicated to solution driven results.',
  cta:      { label: 'Our Story', href: '/about' },
}

// ── Project CTA ──────────────────────────────────────────────
export const projectCtaContent = {
  eyebrow:  'Getting Started',
  headline: 'How can we help?',
  body:     'We\'re here to help you achieve your business goals. Tell us what you are interested in learning more about, and we\'ll follow up within 1–2 business days for a consultation.',
  cta:      { label: 'Request a Quote', href: null }, // opens modal
}

// ── Footer ───────────────────────────────────────────────────
export const footerContent = {
  logoText:    'CodeHe{R} LLC',
  tagline:     'Business Solutions Firm',
  links: [
    { label: 'Home',              href: '/' },
    { label: 'Business Solutions', href: '/services/workforce' },
    { label: 'Digital Solutions', href: '/services/digital' },
    { label: 'About',             href: '/about' },
  ],
  contact: {
    email: 'info@codeherllc.com',
  },
  legal: '© 2024 CodeHe{R} LLC. All rights reserved.',
}

// ── Quote Form ───────────────────────────────────────────────
export const quoteFormContent = {
  eyebrow:      'Start a Conversation',
  title:        "Let's Build What's Next.",
  subtitle:     "Tell us about your goals and we'll reach out within one business day.",
  successTitle: 'We\'ve got your request!',
  successBody:  'Someone from our team will reach out within 1 business day to discuss next steps. Keep an eye on your inbox.',
  errorMessage: 'Something went wrong on our end. Please try again or email us directly at hello@codeher.io.',
  fields: {
    name:     { label: 'Full Name',     placeholder: 'Jane Smith' },
    email:    { label: 'Email Address', placeholder: 'jane@company.com' },
    company:  { label: 'Organization',  placeholder: 'Your company or organization name' },
    service:  { label: 'Project Type',  options: ['Workforce Consulting', 'Digital Solutions', 'Both'] },
    message:  { label: 'Message',       placeholder: "Tell us about your current challenges, goals, or what you'd like to accomplish..." },
  },
  submitLabel: 'Send My Request →',
}
