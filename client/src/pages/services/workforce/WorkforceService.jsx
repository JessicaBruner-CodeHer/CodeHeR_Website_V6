import { motion } from 'framer-motion'
import { useSeo }        from '@/hooks/useSeo'
import { workforcePageContent as c } from '@/assets/constants/serviceContent'
import SectionHeading    from '@/ui/sectionheading/SectionHeading'
import Button            from '@/ui/button/Button'
import WorkforceStats    from '@/sections/workforce/WorkforceStats'

export default function WorkforceService({ onQuoteClick }) {
  useSeo({ title: c.seo.title, description: c.seo.description })

  return (
    <div className="pt-20">

      {/* Hero */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-cream)', borderBottom: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p style={{ color: '#c9973a', marginBottom: '1rem' }} className="text-sm font-medium tracking-widest uppercase">
              {c.hero.eyebrow}
            </p>
            <h1 style={{ color: '#1c1410', marginBottom: '1.5rem' }} className="font-heading text-5xl lg:text-6xl font-semibold leading-tight">
              {c.hero.headline}
            </h1>
            <p style={{ color: '#6f6256', fontSize: '1.25rem', lineHeight: '1.75' }}>
              {c.hero.subtext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Workforce Stats */}
      <WorkforceStats />

      {/* Mid-page CTA */}
      <section
        style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--color-surface-cream)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', maxWidth: '38rem', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 style={{ color: '#1c1410', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
              {c.cta.headline}
            </h2>
            <Button variant="primary" size="lg" onClick={onQuoteClick}>
              {c.cta.label}
            </Button>
          </motion.div>
        </div>
      </section>



      {/* Process */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
        className="bg-[var(--color-surface-white)] border-t border-[var(--color-border-light)]"
      >
        <div className="site-container">
          <SectionHeading headline={c.process.headline} />
          <div style={{ marginTop: '3.5rem', gap: '2rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {c.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}
                className="bg-[var(--color-surface-cream)] rounded-[var(--radius-lg)] border border-[var(--color-border-light)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text-strong)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--color-surface-cream)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#1c1410', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
              {c.cta.headline}
            </h2>
            <Button variant="primary" size="lg" onClick={onQuoteClick}>
              {c.cta.label}
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
