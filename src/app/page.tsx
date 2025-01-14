import { TerminalInfo } from '@/components/sections/terminal-info'
import { Experience } from '@/components/sections/experience'
import { SkillsContent } from '@/components/sections/skills/SkillsContent'
import { Awards } from '@/components/sections/awards'
import { TechStack } from '@/components/sections/tech-stack'
import Image from 'next/image'
import { Founded } from '@/components/sections/founded'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        {/* Hero section */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Terminal Section (2/3) */}
            <div className="order-2 md:order-1 md:col-span-2">
              <div className="h-[300px] md:h-full overflow-hidden rounded-2xl terminal-effect">
                <TerminalInfo />
              </div>
            </div>
            
            {/* Profile Photo Section (1/3) */}
            <div className="relative order-1 md:order-2">
              <div className="elevated-card relative h-[120px] w-[120px] md:w-auto md:h-auto md:aspect-square rounded-full overflow-hidden mx-auto">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFE301] via-[#73D25D] to-[#1a4a2e]" />
                
                {/* Photo Container */}
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src="/leo_photo.png"
                    alt="Leo Naruebet"
                    fill
                    className="object-cover animate-float translate-y-[20%]"
                    priority
                  />
                </div>

                {/* Decorative Grid */}
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Glowing corners - adjusted for circular shape */}
                <div className="absolute top-[10%] left-[10%] h-6 w-6 md:h-10 md:w-10 bg-gradient-to-br from-[#CFE301] to-transparent opacity-50 blur-md rounded-full" />
                <div className="absolute top-[10%] right-[10%] h-6 w-6 md:h-10 md:w-10 bg-gradient-to-bl from-[#73D25D] to-transparent opacity-50 blur-md rounded-full" />
                <div className="absolute bottom-[10%] left-[10%] h-6 w-6 md:h-10 md:w-10 bg-gradient-to-tr from-[#CFE301] to-transparent opacity-50 blur-md rounded-full" />
                <div className="absolute bottom-[10%] right-[10%] h-6 w-6 md:h-10 md:w-10 bg-gradient-to-tl from-[#73D25D] to-transparent opacity-50 blur-md rounded-full" />
              </div>

              {/* Tech dots decoration - adjusted position for circular shape */}
              <div className="absolute -right-2 top-1/4 flex gap-1.5 md:gap-2">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#CFE301] blur-[1px] md:blur-[2px]" />
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#73D25D] blur-[1px] md:blur-[2px]" />
              </div>
              <div className="absolute -left-2 bottom-1/4 flex gap-1.5 md:gap-2">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#73D25D] blur-[1px] md:blur-[2px]" />
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#CFE301] blur-[1px] md:blur-[2px]" />
              </div>
            </div>
          </div>
        </section>
        <Founded />
        <TechStack />
        <Experience />
        <SkillsContent />
        <Awards />
      </div>
    </main>
  )
}
