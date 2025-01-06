'use client'

import { useState } from 'react'
import { experienceData, type Experience } from './data'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'

export function Experience() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <section className="pt-4 pb-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tighter neon-text">work.experience</h2>
          <p className="text-sm text-white/80">Professional journey and achievements</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#73D25D]/50 via-[#CFE301]/50 to-[#73D25D]/50" />

          <div className="space-y-6">
            {experienceData.map((experience: Experience, index: number) => (
              <div 
                key={experience.id}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0">
                  <div className="relative w-2 h-2">
                    <div className="absolute w-2 h-2 rounded-full bg-[#73D25D]" />
                    <div className="absolute w-2 h-2 rounded-full bg-[#73D25D] animate-ping" />
                    <div className="absolute -inset-2 rounded-full bg-[#73D25D]/20" />
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div 
                  className={`w-full pl-8 md:pl-0 md:w-[calc(50%-2rem)] group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative p-4 rounded-lg bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-300 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedId(selectedId === experience.id ? null : experience.id)}
                    whileHover={{ scale: 1.02 }}
                    layoutId={`card-${experience.id}`}
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#73D25D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-[#73D25D]">{experience.role}</h3>
                          <p className="text-sm font-medium text-white/90">
                            {experience.company}
                            <span className="text-xs text-white/60 ml-1">({experience.companyDesc})</span>
                          </p>
                          <p className="text-xs text-white/60">{experience.duration}</p>
                        </div>
                        <div className="flex-shrink-0 p-1.5 rounded-lg bg-[#73D25D]/10 w-10 h-10 flex items-center justify-center">
                          <Image
                            src={experience.logo}
                            alt={experience.company}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedId === experience.id && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-3"
                          >
                            <div className="space-y-2">
                              {experience.achievements.map((achievement: string, i: number) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-xs"
                                >
                                  <span className="text-[#73D25D] mt-1 opacity-80">▹</span>
                                  <p className="text-white/80 leading-relaxed">
                                    {achievement.split('**').map((part, index) => (
                                      index % 2 === 0 ? part : <span key={index} className="font-bold text-[#73D25D]">{part}</span>
                                    ))}
                                  </p>
                                </motion.div>
                              ))}
                            </div>

                            {experience.technologies && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="pt-3 border-t border-[#73D25D]/10"
                              >
                                <div className="flex flex-wrap gap-1.5">
                                  {experience.technologies.map((tech: string) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-0.5 text-[10px] font-medium rounded-full text-white/90 backdrop-blur-sm"
                                      style={{ 
                                        backgroundColor: `${experience.color}15`,
                                        boxShadow: `0 0 20px ${experience.color}10`
                                      }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 