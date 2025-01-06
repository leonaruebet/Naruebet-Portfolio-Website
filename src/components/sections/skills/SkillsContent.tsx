'use client'

import { useState, useEffect } from 'react'
import { skillsData } from './data'
import { motion, AnimatePresence } from 'framer-motion'
import ClientOnly from '@/components/ClientOnly'

export function SkillsContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCategory = selectedId ? skillsData.find(category => category.id === selectedId) : null

  // Add effect to prevent body scroll when overlay is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedId])

  return (
    <ClientOnly>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold tracking-tighter neon-text">skills.expertise</h2>
            <p className="text-sm text-white/80">Core competencies and technical proficiencies</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillsData.map((category) => (
                <div 
                  key={category.id}
                  className="group rounded-lg bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-300"
                  onClick={() => setSelectedId(selectedId === category.id ? null : category.id)}
                >
                  <div className="w-full flex items-center justify-between p-3 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" style={{ color: category.color }} />
                      <code className="text-sm font-mono">
                        <span className="text-[#73D25D]">{category.id}</span>
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed overlay */}
            <AnimatePresence>
              {selectedCategory && (
                <>
                  {/* Backdrop */}
                  <motion.div 
                    className="fixed inset-0 bg-black/50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                  />
                  
                  {/* Content */}
                  <div className="fixed inset-0 pointer-events-none z-50">
                    <div className="container h-full mx-auto px-4 flex items-end md:items-center justify-center">
                      <motion.div 
                        className="pointer-events-auto w-full max-w-3xl bg-[#252525] border-t border-[#73D25D]/40 md:border md:rounded-lg md:max-h-[90vh]"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      >
                        {/* Handle for mobile */}
                        <div className="h-1.5 w-12 mx-auto mt-2 mb-1 rounded-full bg-white/20 md:hidden" />

                        <div className="overflow-y-auto max-h-[60vh] md:max-h-[calc(90vh-100px)] p-4">
                          <div className="sticky top-0 bg-[#252525] pt-2 pb-4 mb-4 border-b border-[#73D25D]/10 z-10">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <selectedCategory.icon 
                                  className="h-5 w-5" 
                                  style={{ color: selectedCategory.color }} 
                                />
                                <code className="text-base font-mono">
                                  <span className="text-[#73D25D]">
                                    {selectedCategory.id}
                                  </span>
                                </code>
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedId(null)
                                }}
                                className="text-white/60 hover:text-white transition-colors p-2"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            {selectedCategory.subCategories.map((sub) => (
                              <div key={sub.name} className="relative">
                                <div className="mb-2 flex items-center gap-2">
                                  <sub.icon className="h-3.5 w-3.5" style={{ color: selectedCategory.color }} />
                                  <code className="text-xs font-mono text-white">{sub.name.toLowerCase()}</code>
                                </div>
                                
                                <div className="space-y-2">
                                  {sub.details.map((detail) => (
                                    <div 
                                      key={detail.name} 
                                      className="rounded bg-[#2a2a2a] p-2 hover:bg-[#303030] transition-colors duration-300 border border-[#73D25D]/10"
                                    >
                                      <div className="mb-1 flex items-center gap-1.5">
                                        {detail.icon && (
                                          <detail.icon 
                                            className="h-3 w-3" 
                                            style={{ color: selectedCategory.color }} 
                                          />
                                        )}
                                        <code className="text-xs font-mono" style={{ color: selectedCategory.color }}>
                                          {detail.name.toLowerCase()}
                                        </code>
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                        {detail.tools.map((tool) => (
                                          <span 
                                            key={tool}
                                            className="rounded-full px-1.5 py-0.5 text-[10px] text-white transition-colors hover:bg-opacity-30"
                                            style={{ 
                                              backgroundColor: `${selectedCategory.color}20`
                                            }}
                                          >
                                            {tool}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </ClientOnly>
  )
} 