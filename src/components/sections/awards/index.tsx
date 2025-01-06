'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaCrown, FaStar, FaAward, FaMoneyBillWave, FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

interface Award {
  id: string
  title: string
  year: string
  description: string
  highlight?: string
  icon?: 'trophy' | 'medal' | 'crown' | 'star'
  rank: 'winner' | 'first' | 'second' | 'finalist'
}

const getIcon = (type?: string) => {
  switch (type) {
    case 'trophy':
      return FaTrophy
    case 'medal':
      return FaMedal
    case 'crown':
      return FaCrown
    case 'star':
      return FaStar
    default:
      return FaAward
  }
}

const getRankColor = (rank: string) => {
  switch (rank) {
    case 'winner':
      return '#FFD700' // Gold
    case 'first':
      return '#C0C0C0' // Silver
    case 'second':
      return '#CD7F32' // Bronze
    default:
      return '#73D25D' // Default green
  }
}

const grants: Award[] = [
  {
    id: 'microsoft',
    title: 'Microsoft Founders Hub Grant',
    year: '2024',
    description: 'Secured $1,000 for entrepreneurial initiatives',
    rank: 'winner'
  },
  {
    id: 'ddi-sandbox',
    title: 'DDI Sandbox Grant',
    year: '2023',
    description: 'Secured 90,000฿ to support innovative projects',
    rank: 'winner'
  },
]

const competitions: Award[] = [
  // Winners
  {
    id: 'upower',
    title: 'U Power Digital Idea Challenge S7',
    year: '2024',
    description: 'Winner',
    highlight: 'among 982 teams in AI for Marketing',
    icon: 'crown',
    rank: 'winner'
  },
  {
    id: 'ddi-connect',
    title: 'DDI Connect',
    year: '2024',
    description: 'Winner',
    highlight: 'for building a successful revenue-generating business in one year',
    icon: 'crown',
    rank: 'winner'
  },
  {
    id: 'youth-mentorship',
    title: 'Youth Mentorship Project Hackathon',
    year: '2022',
    description: 'Winner',
    icon: 'crown',
    rank: 'winner'
  },
  // First Runner-Ups
  {
    id: 'microsoft-track',
    title: 'Microsoft Track | CHOICEISYOUR2024',
    year: '2024',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'ai-cyber',
    title: 'AI & Cyber Security Hackathon',
    year: '2024',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'cubs',
    title: 'CUBS Blockathon',
    year: '2024',
    description: '1st Runner-Up',
    highlight: 'among 2,000+ participants',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'young-gen',
    title: 'Young Gen Hackathon',
    year: '2022',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'ddi-bootcamp',
    title: 'DDI Bootcamp',
    year: '2023',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'ddi-tech',
    title: 'DDI Tech Startup Program',
    year: '2022',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'base',
    title: 'Business Idea Competition by Base x Ignite',
    year: '2021',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  {
    id: 'teen',
    title: 'วัยรุ่นมีของ Competition',
    year: '2021',
    description: '1st Runner-Up',
    icon: 'medal',
    rank: 'first'
  },
  // Second Runner-Ups
  {
    id: 'kmutt',
    title: 'KMUTT MIDI Hackathon',
    year: '2022',
    description: '2nd Runner-Up',
    icon: 'medal',
    rank: 'second'
  },
  {
    id: 'nitad',
    title: 'NiTAD 18 Chulalongkorn',
    year: '2022',
    description: '2nd Runner-Up',
    icon: 'medal',
    rank: 'second'
  },
  {
    id: 'chula',
    title: 'Chula Engineer Hackathon',
    year: '2022',
    description: '2nd Runner-Up + Most Creative Prize',
    icon: 'medal',
    rank: 'second'
  },
  // Special Awards & Finalists
  {
    id: 'youthful',
    title: 'Youthful Issue Competition',
    year: '2023',
    description: 'Most Sustainable Award',
    icon: 'trophy',
    rank: 'winner'
  },
  {
    id: 'hackathailand',
    title: 'HACKaTHAILAND',
    year: '2023',
    description: 'Achieved 5th place',
    icon: 'star',
    rank: 'finalist'
  },
  {
    id: 'travelution',
    title: 'Travelution Competition',
    year: '2022',
    description: 'Finalist (Top 10)',
    highlight: 'Leveraged data analytics for impactful visualizations',
    icon: 'star',
    rank: 'finalist'
  },
  {
    id: 'aiesec',
    title: 'AIESEC Thailand Social Case Competition',
    year: '2022',
    description: 'Final Round',
    icon: 'star',
    rank: 'finalist'
  },
]

export function Awards() {
  const winners = competitions.filter(c => c.rank === 'winner')
  const firstRunnerUps = competitions.filter(c => c.rank === 'first')
  const secondRunnerUps = competitions.filter(c => c.rank === 'second')
  const finalists = competitions.filter(c => c.rank === 'finalist')

  const renderAwards = (awards: Award[]) => {
    return awards.map((award, index) => {
      const Icon = getIcon(award.icon)
      const color = getRankColor(award.rank)
      return (
        <motion.div
          key={award.id}
          className="group p-3 rounded-lg bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="flex gap-3">
            <div 
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${color}15` }}
            >
              <Icon className="h-3 w-3" style={{ color }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-medium text-sm truncate" style={{ color }}>{award.title}</h4>
                <span className="text-[10px] text-white/40 shrink-0">{award.year}</span>
              </div>
              <p className="text-xs text-white/60 truncate group-hover:whitespace-normal">
                {award.description}
                {award.highlight && (
                  <span className="text-white/40 ml-1 hidden group-hover:inline">— {award.highlight}</span>
                )}
              </p>
            </div>
          </div>
        </motion.div>
      )
    })
  }

  const socialLinks = [
    {
      id: 'facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/leoebet',
      label: 'Facebook'
    },
    {
      id: 'github',
      icon: FaGithub,
      href: 'https://github.com/leonaruebet',
      label: 'GitHub'
    },
    {
      id: 'youtube',
      icon: FaYoutube,
      href: 'https://www.youtube.com/@leonaruebet',
      label: 'YouTube'
    },
    {
      id: 'line',
      icon: SiLine,
      href: 'https://line.me/ti/p/~leo25462546',
      label: 'Line'
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/leonaruebet/',
      label: 'LinkedIn'
    }
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tighter neon-text">awards.achievements</h2>
          <p className="text-sm text-white/80">Recognition and milestones in the journey</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Grants Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaMoneyBillWave className="text-[#73D25D] h-4 w-4" />
              <h3 className="text-base font-semibold text-white">Grants & Funding</h3>
            </div>
            <div className="grid gap-2">
              {grants.map((grant) => (
                <motion.div
                  key={grant.id}
                  className="p-3 rounded-lg bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="font-medium text-[#73D25D] text-sm truncate">{grant.title}</h4>
                      <p className="text-xs text-white/60 truncate">{grant.description}</p>
                    </div>
                    <span className="text-[10px] text-white/40 shrink-0">{grant.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Competitions Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTrophy className="text-[#73D25D] h-4 w-4" />
              <h3 className="text-base font-semibold text-white">Competitions</h3>
            </div>
            <div className="space-y-6">
              {/* Winners */}
              <div>
                <h4 className="text-xs font-medium text-[#FFD700] mb-2 uppercase tracking-wider">Winners</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {renderAwards(winners)}
                </div>
              </div>

              {/* First Runner-Ups */}
              <div>
                <h4 className="text-xs font-medium text-[#C0C0C0] mb-2 uppercase tracking-wider">First Runner-Ups</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {renderAwards(firstRunnerUps)}
                </div>
              </div>

              {/* Second Runner-Ups */}
              <div>
                <h4 className="text-xs font-medium text-[#CD7F32] mb-2 uppercase tracking-wider">Second Runner-Ups</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {renderAwards(secondRunnerUps)}
                </div>
              </div>

              {/* Finalists */}
              <div>
                <h4 className="text-xs font-medium text-[#73D25D] mb-2 uppercase tracking-wider">Special Awards & Finalists</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {renderAwards(finalists)}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-12 border-t border-[#73D25D]/20">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold tracking-tighter neon-text">contact.me</h2>
              <p className="text-sm text-white/80 mb-6">Let's connect and create something amazing together</p>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 hover:bg-[#73D25D]/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.label}
                    >
                      <Icon className="h-6 w-6 text-[#73D25D]" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 