'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-4"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#CFE301] to-[#73D25D] bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs text-white/60 mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
} 