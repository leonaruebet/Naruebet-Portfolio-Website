'use client'

import { motion } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

const roles = [
  'Entrepreneur',
  'Data Scientist',
  'Business Development',
  'Business Analyst',
  'Marketing',
  'AI Prompt Engineer',
  'Full Stack Developer',
  'AI Automation Specialist',
  'Business Researcher'
]

export function Roles() {
  const [scrollWidth, setScrollWidth] = useState(0)

  useLayoutEffect(() => {
    const calculateWidth = () => {
      const roleWidth = 200 // Approximate width of each role item
      const totalWidth = roles.length * roleWidth
      setScrollWidth(-totalWidth)
    }
    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          <motion.div 
            className="flex gap-4 py-2 w-max"
            animate={{
              x: [0, scrollWidth]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...roles, ...roles].map((role, index) => (
              <motion.div
                key={`${role}-${index}`}
                className="shrink-0 px-4 py-1.5 bg-[#1a1a1a] rounded-full border border-[#73D25D]/20 text-white/90 text-sm whitespace-nowrap"
                whileHover={{ scale: 1.05, borderColor: 'rgba(115, 210, 93, 0.4)' }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 