import { motion } from 'framer-motion'
import { heroContent as c } from '@/assets/constants/siteContent'
import Button from '@/ui/button/Button'
import logoDarkTransparent from '../../assets/images/CodeHeR_Logo_Dark_Transparent.svg'
import logoTransparent from '../../assets/images/CodeHeR_Logo_Transparent.svg'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Hero({ onQuoteClick }) {
  return (
    <section className="relative min-h-[92vh] flex pt-20 overflow-hidden">

      {/* Left panel — inkwell dark */}
      <div className="
        hidden lg:flex
        w-[45%] shrink-0
        bg-[var(--color-bg-main)]
        items-center justify-center
        px-12
      ">
        <motion.img
          {...fadeUp(0.05)}
          src={logoDarkTransparent}
          alt="CodeHeR LLC"
          className="w-full max-w-[420px]"
        />
      </div>

      {/* Right panel — cream */}
      <div
        className="flex-1 bg-[var(--color-surface-cream)] flex items-center relative"
        style={{ padding: '6rem 5rem' }}
      >
        {/* Subtle background texture */}
        <div className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,151,58,0.07),transparent)]
        " />

        <div className="relative z-10 max-w-xl">

          {/* Logo — mobile only (shown when left panel is hidden) */}
          <motion.div
            {...fadeUp(0.05)}
            className="lg:hidden mb-8 flex justify-center"
          >
            <img
              src={logoTransparent}
              alt="CodeHeR LLC"
              className="w-full max-w-[300px]"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm font-medium tracking-widest uppercase mb-6 text-[var(--color-primary)]"
          >
            {c.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="
              font-heading text-5xl sm:text-6xl lg:text-6xl
              font-semibold leading-[1.08] text-[var(--color-text-strong)]
              mb-6 whitespace-pre-line
            "
          >
            {c.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10"
          >
            {c.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" onClick={onQuoteClick}>
              {c.primaryCta.label}
            </Button>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
