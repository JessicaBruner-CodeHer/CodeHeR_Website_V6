import { motion } from 'framer-motion'
import { Users, Monitor, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { servicesTeaserContent as c } from '@/assets/constants/siteContent'
import SectionHeading from '@/ui/sectionheading/SectionHeading'

const ICON_MAP = { Users, Monitor }

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

export default function ServicesTeaser() {
  return (
    <section
      id="services"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      className="bg-[var(--color-surface-white)] border-t border-b border-[var(--color-border-light)]"
    >
      <div className="site-container">

        <SectionHeading
          eyebrow={c.eyebrow}
          headline={c.headline}
          subtext={c.subtext}
          align="center"
          className="max-w-2xl"
        />

        <div
          style={{ marginTop: '4rem', gap: '2.5rem' }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {c.services.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                style={{ padding: '3rem', gap: '2rem', display: 'flex', flexDirection: 'column' }}
                className="
                  group
                  bg-[var(--color-surface-cream)]
                  border border-[var(--color-bg-main)]/20
                  ring-1 ring-inset ring-[var(--color-bg-main)]/10
                  rounded-[var(--radius-xl)]
                  shadow-[0_4px_24px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_8px_40px_rgba(0,0,0,0.16)]
                  hover:-translate-y-1.5
                  transition-all duration-[var(--transition-base)]
                "
              >
                {/* Icon */}
                <div className="
                  w-14 h-14 rounded-[var(--radius-md)]
                  bg-[var(--color-primary)]/10
                  flex items-center justify-center
                  text-[var(--color-primary)]
                  shrink-0
                ">
                  {Icon && <Icon size={26} strokeWidth={1.5} />}
                </div>

                {/* Label + tagline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-primary)]">
                    {service.label}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-[var(--color-text-strong)] leading-snug">
                    {service.tagline}
                  </h3>
                </div>

                <p style={{ flex: 1 }} className="text-base text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to={service.cta.href}
                  className="
                    inline-flex items-center gap-2 text-sm font-medium
                    text-[var(--color-primary)]
                    group-hover:gap-3
                    transition-all duration-[var(--transition-fast)]
                  "
                >
                  {service.cta.label}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
