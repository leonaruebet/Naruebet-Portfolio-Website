'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/section-header'

const companies = [
  {
    name: 'iReadCustomer',
    logo: '/ireadcustomer.webp',
    href: 'https://ireadcustomer.com/',
    role: 'Founder',
    description: 'Agentic Data Analytics',
    year: '2024'
  },
  {
    name: 'Station',
    logo: '/station copy.png',
    href: 'https://stationgroup.co.th/',
    role: 'Co-Founder',
    description: 'Innovation Hub',
    year: '2024'
  },
  {
    name: 'Starters',
    logo: '/starters.png',
    href: 'https://www.startersofficial.com/',
    role: 'Co-Founder',
    description: 'Dynamic 3D Printing driven by Social Listening',
    year: '2022'
  }
]

export function Founded() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="founded"
          subtitle="Companies I've Founded & Co-Founded"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto items-stretch"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`bg-[#1a1a1a] rounded-lg p-3 border ${company.role === 'Founder' ? 'border-[#73D25D]/20 hover:border-[#73D25D]/40' : 'border-white/5 hover:border-white/20'} transition-colors`}>
                  <div className="relative h-14 w-full flex items-center justify-center mb-2">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300 p-1"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs font-medium text-white/90">{company.name}</h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] ${
                        company.role === 'Founder' 
                          ? 'bg-[#73D25D]/10 text-[#73D25D]' 
                          : 'bg-white/5 text-white/60'
                      }`}>
                        {company.role}
                      </span>
                      <span className="text-[10px] text-white/40">
                        {company.year}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/50 mt-1 leading-tight">
                      {company.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 