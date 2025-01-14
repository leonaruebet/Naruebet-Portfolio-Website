'use client'

import { TerminalInfo } from '@/components/sections/terminal-info'
import { Experience } from '@/components/sections/experience'
import { SkillsContent } from '@/components/sections/skills/SkillsContent'
import { Awards } from '@/components/sections/awards'
import { TechStack } from '@/components/sections/tech-stack'
import Image from 'next/image'
import { Founded } from '@/components/sections/founded'
import { Roles } from '@/components/sections/roles'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        {/* Hero section */}
        <section className="mb-24">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Terminal Section (2/3) */}
            <div className="order-2 md:order-1 md:col-span-2">
              <div className="h-[300px] md:h-full overflow-hidden rounded-2xl terminal-effect">
                <TerminalInfo />
              </div>
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://drive.google.com/drive/u/0/folders/1CRgnJ81l60ePGQ0asm7L4VuYQWp9S-sS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Code-like background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, transparent 0%, transparent 50%, rgba(115, 210, 93, 0.1) 50%, rgba(115, 210, 93, 0.1) 100%),
                        linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(115, 210, 93, 0.1) 50%, rgba(115, 210, 93, 0.1) 100%)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#73D25D]/10 via-[#95E06C]/20 to-[#73D25D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'gradient-shift 3s linear infinite'
                    }}
                  />
                  
                  {/* Glowing border with code-like corners */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 rounded-xl border border-[#73D25D]/30 group-hover:border-[#73D25D]/60 transition-colors duration-500" />
                    {/* Code-like corner brackets */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#73D25D] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#73D25D] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#73D25D] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#73D25D] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Terminal-like icon container */}
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-[#73D25D]/20 group-hover:bg-[#73D25D]/30 transition-all duration-500 border border-[#73D25D]/30 group-hover:border-[#73D25D]/60">
                    <i className="fas fa-terminal text-[#73D25D] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Text content with code-like elements */}
                  <div className="relative flex items-center gap-2">
                    <span className="text-[#73D25D]/60 group-hover:text-[#73D25D] transition-colors duration-500">&lt;</span>
                    <span className="relative font-medium text-sm text-white/90 group-hover:text-white transition-colors duration-500">
                      cv.download()
                    </span>
                    <span className="text-[#73D25D]/60 group-hover:text-[#73D25D] transition-colors duration-500">/&gt;</span>
                  </div>
                  
                  {/* Arrow icon with enhanced animation */}
                  <i className="relative fas fa-arrow-right text-[#73D25D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 group-hover:animate-pulse" />
                </motion.a>
              </motion.div>
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
        <Roles />
        <Founded />
        <TechStack />
        <Experience />
        <SkillsContent />
        <Awards />
      </div>
    </main>
  )
}
