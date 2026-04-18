import { useSeo }     from '@/hooks/useSeo'
import Hero           from '@/sections/hero/Hero'
import ServicesTeaser from '@/sections/services/ServicesTeaser'
import Mission        from '@/sections/mission/Mission'
import AboutTeaser    from '@/sections/about/AboutTeaser'
import ProjectCta     from '@/sections/projectcta/ProjectCta'

export default function Home({ onQuoteClick }) {
  useSeo({
    title:       'Home',
    description: 'CodeHeR LLC — Workforce consulting and professional web development for growing businesses.',
  })

  return (
    <div className="pt-20">
      <Hero          onQuoteClick={onQuoteClick} />
      <ServicesTeaser />
      <Mission />
      <AboutTeaser />
      <ProjectCta    onQuoteClick={onQuoteClick} />
    </div>
  )
}
