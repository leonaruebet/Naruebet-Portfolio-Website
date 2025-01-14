'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function TerminalInfo() {
  const [displayText, setDisplayText] = useState('')
  const [showPrompt, setShowPrompt] = useState(true)

  useEffect(() => {
    const text = `Hi there! I'm Leo Naruebet, a passionate Data Scientist and Business Developer based in Bangkok, Thailand. I specialize in leveraging AI and data analytics to drive business innovation and growth.`
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index])
        index++
      } else {
        clearInterval(timer)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-full w-full bg-[#1a1a1a] p-4 font-mono text-sm text-white/80">
      {/* Terminal Header */}
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-white/40">leo@naruebet: ~</span>
      </div>

      {/* Terminal Content */}
      <div className="whitespace-pre-wrap">
        <div className="flex">
          <span className="mr-2 text-[#73D25D]">$</span>
          <span className="font-bold">whoami</span>
        </div>
        <div className="mt-2">{displayText}</div>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block h-4 w-2 bg-white/80"
          />
        )}
      </div>
    </div>
  )
} 