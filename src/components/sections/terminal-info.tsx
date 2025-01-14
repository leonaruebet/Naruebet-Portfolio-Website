'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const roles = [
  'Entrepreneur',
  'Data Scientist',
  'Business Development',
  'Full Stack Developer',
  'Product Manager',
  'AI Prompt Engineer',
  'Graphic Designer'
]

const information = [
  {
    title: 'Data Scientist & Business Analyst',
    content: 'I excel at transforming complex datasets into actionable insights, combining analytics (Python, Tableau) and business acumen (DCF, RFM) to improve efficiency, drive growth, and shape strategic decisions across various industries.'
  },
  {
    title: 'Entrepreneurial Leadership',
    content: 'With multiple co-founded startups, I\'ve secured funding, spearheaded product innovation, and achieved significant ROI through AI-driven marketing, customer-centric strategies, and collaborative partnerships.'
  },
  {
    title: 'Prompt Engineer & AI Integration',
    content: 'I leverage AI tools (ChatGPT, Claude, RAG-based chatbots) to streamline processes and optimize outcomes in programming, finance, automation, marketing, and business. My expertise spans prompt engineering, model training, and end-to-end AI deployment.'
  },
  {
    title: 'Academic & Competitive Excellence',
    content: 'Graduating from Assumption University with a 3.80/4.0 GPA in Design and Digital Innovation, I\'ve also achieved top placements in national hackathons and competitions, showcasing my ability to deliver high-impact solutions under pressure.'
  }
]

// Create a client-side only component for the content
function TerminalContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showPrompt] = useState(true)
  const [scrollWidth, setScrollWidth] = useState(0)

  useLayoutEffect(() => {
    const calculateWidth = () => {
      const roleWidth = 150 // Approximate width of each role item
      const totalWidth = roles.length * roleWidth
      setScrollWidth(-totalWidth)
    }
    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      const currentInfo = information[currentIndex]
      const textToType = `> ${currentInfo.title}\n${currentInfo.content}`

      if (displayText.length < textToType.length) {
        timeout = setTimeout(() => {
          setDisplayText(textToType.slice(0, displayText.length + 1))
        }, 50)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setCurrentIndex((prev) => (prev + 1) % information.length)
          setIsTyping(true)
        }
      }, 20)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentIndex])

  const renderContent = () => {
    const lines = displayText.split('\n')
    if (lines.length < 2) return displayText

    const [title, ...content] = lines
    return (
      <>
        <div className="font-bold text-[#73D25D] mb-2">{title}</div>
        <div className="text-white/90 whitespace-pre-wrap">{content.join('\n')}</div>
      </>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100%-2rem)]">
      {/* Roles Display */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
        <motion.div 
          className="flex gap-2 sm:gap-3 py-2 w-max"
          animate={{
            x: [0, scrollWidth]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...roles, ...roles, ...roles].map((role, index) => (
            <motion.div
              key={`role-${index}`}
              className="shrink-0 px-3 sm:px-4 py-1.5 bg-[#1a1a1a] rounded-full border border-[#73D25D]/20 text-white/90 text-xs sm:text-sm whitespace-nowrap"
              whileHover={{ scale: 1.05, borderColor: 'rgba(115, 210, 93, 0.4)' }}
            >
              {role}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Terminal Text Content */}
      <div className="flex-grow overflow-y-auto w-full">
        <div className="w-full px-2">
          <div className="font-bold text-[#73D25D] mb-2 break-words">
            {displayText.split('\n')[0]}
          </div>
          <div 
            className="text-white/90 text-sm sm:text-base"
            style={{ 
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
              maxWidth: '100%'
            }}
          >
            {displayText.split('\n').slice(1).join('\n')}
          </div>
          {showPrompt && (
            <span className="ml-1 inline-block h-4 w-2 bg-primary-solid animate-pulse" />
          )}
        </div>
      </div>

      {/* CV Download Button */}
      <div className="flex-shrink-0 mt-4 flex justify-end">
        <motion.a
          href="https://drive.google.com/drive/u/0/folders/1CRgnJ81l60ePGQ0asm7L4VuYQWp9S-sS"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm bg-[#1a1a1a] rounded-lg border border-[#73D25D]/20 hover:border-[#73D25D]/40 transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#73D25D]/0 via-[#73D25D]/5 to-[#73D25D]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <div className="relative flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8">
            <div className="absolute inset-0 border border-[#73D25D]/30 rounded-md group-hover:border-[#73D25D]/60 transition-colors duration-300" />
            <div 
              className="absolute inset-0 border border-[#73D25D]/20 rounded-md animate-[rotate_4s_linear_infinite]"
            />
            <FaDownload className="relative z-10 h-3 sm:h-4 w-3 sm:w-4 text-[#73D25D] group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#73D25D]/50 font-mono">&lt;</span>
            <span className="text-white/90 group-hover:text-white transition-colors duration-300">
              Download_CV
            </span>
            <span className="text-[#73D25D]/50 font-mono">/&gt;</span>
          </div>

          <span className="ml-1 inline-block h-3 sm:h-4 w-1 sm:w-1.5 bg-[#73D25D]/50 animate-pulse" />
        </motion.a>
      </div>
    </div>
  )
}

export function TerminalInfo() {
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-full w-full p-2 sm:p-4 md:p-6 font-mono text-sm">
      {/* Terminal Header */}
      <div className="mb-2 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-white opacity-50">personal.summary</span>
      </div>

      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 2rem)' }}>
        <AnimatePresence mode="wait">
          {mounted && <TerminalContent />}
        </AnimatePresence>
      </div>
    </div>
  )
} 