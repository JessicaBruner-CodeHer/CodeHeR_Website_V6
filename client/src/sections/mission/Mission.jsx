import { motion } from 'framer-motion'
import { Target, Shield, Zap } from 'lucide-react'
import { missionContent as c } from '@/assets/constants/siteContent'

const ICON_MAP = { Target, Shield, Zap }

export default function Mission() {
  return (
    <section
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      className="relative overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-light)]"
    >
      {/* Subtle radial glow */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(201,151,58,0.06),transparent)]
      " />

      <div className="site-container relative z-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary)] text-center"
          style={{ marginBottom: '1.5rem' }}
        >
          {c.eyebrow}
        </motion.p>

        {/* Bold statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="
            font-heading text-2xl md:text-3xl lg:text-4xl
            font-semibold text-[var(--color-text-light)]
            text-center leading-snug border-l-0
          "
          style={{ marginBottom: '3.5rem' }}
        >
          &ldquo;{c.statement}&rdquo;
        </motion.blockquote>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(201,151,58,0.3)', marginBottom: '3.5rem' }} />

        {/* Pillars */}
        <div
          style={{ gap: '4rem' }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {c.pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon]
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div className="
                  w-10 h-10 rounded-[var(--radius-md)]
                  bg-[var(--color-primary)]/15
                  flex items-center justify-center
                  text-[var(--color-primary)]
                ">
                  {Icon && <Icon size={18} strokeWidth={1.5} />}
                </div>

                <h3 style={{ color: '#c9973a' }} className="font-heading text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#c8bfb4', lineHeight: '1.75' }}>
                  {pillar.body}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
