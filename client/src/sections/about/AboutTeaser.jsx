import { motion } from 'framer-motion'
import { aboutTeaserContent as c } from '@/assets/constants/siteContent'
import SectionHeading from '@/ui/sectionheading/SectionHeading'
import Button from '@/ui/button/Button'
import bridgeImage from '../../assets/images/codeher_bridge_refined.svg'

export default function AboutTeaser() {
  return (
    <section
      className="flex flex-col lg:flex-row border-t border-[var(--color-border-light)]"
      style={{ minHeight: '520px' }}
    >
      {/* Left — cream, text content */}
      <div
        className="flex-1 bg-[var(--color-surface-cream)] flex items-center"
        style={{ padding: '7rem 4rem' }}
      >
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow={c.eyebrow}
            headline={c.headline}
            subtext={c.body}
          />
          <div style={{ marginTop: '2.5rem' }}>
            <Button variant="outline" size="md" href={c.cta.href}>
              {c.cta.label}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right — inkwell, bridge image */}
      <div
        className="flex-1 bg-[var(--color-bg-main)] flex items-center justify-center"
        style={{ minHeight: '400px' }}
      >
        <motion.img
          src={bridgeImage}
          alt="The bridge between people and technology — CodeHeR LLC"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

    </section>
  )
}
