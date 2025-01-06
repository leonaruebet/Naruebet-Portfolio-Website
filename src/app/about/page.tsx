import { AboutHero } from '@/components/sections/about-hero'
import { Skills } from '@/components/sections/skills'
import { Companies } from '@/components/sections/companies'

export default function AboutPage() {
  return (
    <div className="space-y-12 py-12 md:py-20">
      <AboutHero />
      <Companies />
      <Skills />
    </div>
  )
} 