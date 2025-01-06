'use client'

import { useEffect, useState } from 'react'
import { SkillsContent } from './SkillsContent'

export function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="inline-block bg-[#1a1a1a] rounded-lg p-3">
              <code className="text-lg md:text-xl font-mono text-white/70">Loading...</code>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-[#1a1a1a] animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return <SkillsContent />
} 