import { motion } from 'framer-motion'
import { projectCtaContent as c } from '@/assets/constants/siteContent'
import Button from '@/ui/button/Button'

export default function ProjectCta({ onQuoteClick }) {
  return (
    <section
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      className="bg-[var(--color-surface-white)] border-t border-[var(--color-border-light)]"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '42rem',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            padding: '4rem',
            background: 'var(--color-surface-cream)',
            border: '1px solid rgba(28,20,16,0.12)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary)]">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--color-text-strong)]">
            {c.headline}
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed" style={{ maxWidth: '32rem' }}>
            {c.body}
          </p>
          <Button variant="primary" size="lg" onClick={onQuoteClick}>
            {c.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
