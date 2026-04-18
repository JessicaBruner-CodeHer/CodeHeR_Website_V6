import { motion } from 'framer-motion'
import { Eye, Heart, Wrench } from 'lucide-react'
import { useModal }          from '@/hooks/useModal'
import { useSeo }            from '@/hooks/useSeo'
import { aboutPageContent as c } from '@/assets/constants/aboutContent'
import SectionContainer from '@/ui/sectioncontainer/SectionContainer'
import SectionHeading   from '@/ui/sectionheading/SectionHeading'
import Button           from '@/ui/button/Button'
import Modal            from '@/ui/modal/Modal'
import QuoteForm        from '@/components/forms/quoteform/QuoteForm'

const ICON_MAP = { Eye, Heart, Wrench }

export default function About() {
  useSeo({ title: c.seo.title, description: c.seo.description })
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className="pt-20">

        {/* Hero */}
        <section className="
          bg-[var(--color-surface-cream)]
          py-24 lg:py-32
        ">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary)] mb-4">
                {c.hero.eyebrow}
              </p>
              <h1 className="font-heading text-5xl lg:text-6xl font-semibold text-[var(--color-text-strong)] leading-tight mb-6 whitespace-pre-line">
                {c.hero.headline}
              </h1>
              <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
                {c.hero.subtext}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <SectionContainer>
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Our story" headline={c.story.headline} />
            <div className="flex flex-col gap-5">
              {c.story.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-lg text-[var(--color-text-muted)] leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Values */}
        <SectionContainer className="bg-[var(--color-surface-cream)]">
          <SectionHeading eyebrow="What we stand for" headline="Our values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.values.map((v, i) => {
              const Icon = ICON_MAP[v.icon]
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-border-light)] shadow-[var(--shadow-sm)]"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--color-text-strong)]">
                    {v.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    {v.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </SectionContainer>

        {/* CTA */}
        <SectionContainer dark>
          <div className="text-center flex flex-col items-center gap-6 max-w-xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--color-text-light)]">
              {c.cta.headline}
            </h2>
            <Button variant="primary" size="lg" onClick={openModal}>
              {c.cta.label}
            </Button>
          </div>
        </SectionContainer>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title="Get in Touch">
        <QuoteForm onSuccess={closeModal} />
      </Modal>
    </>
  )
}
