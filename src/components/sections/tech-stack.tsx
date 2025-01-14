'use client'

import { motion } from 'framer-motion'
import { SiSwift, SiHtml5, SiCss3, SiJavascript, SiArduino, SiNextdotjs, SiNodedotjs, SiMongodb, SiPython, SiReact, SiJupyter, SiCplusplus, SiVercel, SiRailway, SiTailwindcss } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

const techStack = [
  {
    name: 'C++',
    icon: SiCplusplus,
    color: '#00599C'
  },
  {
    name: 'Swift',
    icon: SiSwift,
    color: '#FF4F2B'
  },
  {
    name: 'HTML',
    icon: SiHtml5,
    color: '#E34F26'
  },
  {
    name: 'CSS',
    icon: SiCss3,
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E'
  },
  {
    name: 'Arduino',
    icon: SiArduino,
    color: '#00979D'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#ffffff'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB'
  },
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB'
  },
  {
    name: 'Jupyter',
    icon: SiJupyter,
    color: '#F37626'
  },
  {
    name: 'Google Auth',
    icon: FcGoogle,
    color: '#4285F4'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#ffffff'
  },
  {
    name: 'Railway',
    icon: SiRailway,
    color: '#FFFFFF'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38BDF8'
  }
]

export function TechStack() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <motion.h2 
            className="mb-2 text-xl font-bold tracking-tighter neon-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            tech.stack
          </motion.h2>
          <motion.p 
            className="text-xs text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies I work with
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  className="group relative p-2 rounded-lg bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#73D25D]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                  <div className="relative flex flex-col items-center gap-2">
                    <motion.div 
                      className="p-2 rounded-md"
                      style={{ backgroundColor: `${tech.color}15` }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                    </motion.div>
                    <span className="text-[10px] font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>

                  {/* Glowing corner */}
                  <div 
                    className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ 
                      backgroundColor: tech.color,
                      boxShadow: `0 0 10px ${tech.color}`,
                      filter: 'brightness(1.3)'
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 