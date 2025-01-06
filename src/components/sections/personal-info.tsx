'use client'

import { useState, useEffect } from 'react'

const titles = [
  {
    line1: "Data Scientist & Business Developer",
    line2: "Creating Innovative Solutions"
  },
  {
    line1: "AI & Machine Learning Expert",
    line2: "Transforming Ideas into Reality"
  }
]

export function PersonalInfo() {
  const [mounted, setMounted] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const currentTitle = titles[titleIndex]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Terminal Card */}
        <div className="text-center relative terminal-effect rounded-lg w-[min(95%,800px)] mx-auto overflow-hidden animate-fade-in">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222222] bg-gradient-to-r from-[#151515] via-[#181818] to-[#151515] relative">
            {/* Terminal dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-lg" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41] shadow-lg" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-gray-500 font-mono tracking-wider">naruebet.profile</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-[10px] xs:text-xs sm:text-sm md:text-base text-left p-6 space-y-4">
            <div className="flex items-start elevated-card p-3 rounded-md">
              <span className="text-primary mr-2">$</span>
              <span className="text-white/90">whoami</span>
            </div>
            <div className="pl-4 glass-effect p-4 rounded-md">
              <span className="text-white/75">
                Name: Naruebet Aungsirikulthumrong<br />
                Role: Data Scientist & Business Developer<br />
                Location: Bangkok, Thailand<br />
                Education: Computer Science, KMITL<br />
                Focus: AI, Machine Learning, Business Development
              </span>
            </div>
            <div className="flex items-start elevated-card p-3 rounded-md">
              <span className="text-primary mr-2">$</span>
              <span className="text-white/90">skills --list</span>
            </div>
            <div className="pl-4 glass-effect p-4 rounded-md">
              <span className="text-white/75">
                Languages: Python, JavaScript, SQL, Swift<br />
                Frameworks: TensorFlow, PyTorch, Next.js<br />
                Tools: Docker, Git, AWS, GCP<br />
                Business: Strategy, Analytics, Leadership
              </span>
            </div>
            <div className="flex items-start elevated-card p-3 rounded-md">
              <span className="text-primary mr-2">$</span>
              <span className="text-white/90">contact --info</span>
            </div>
            <div className="pl-4 glass-effect p-4 rounded-md">
              <span className="text-white/75">
                Email: leonaruebet@gmail.com<br />
                GitHub: github.com/leonaruebet<br />
                LinkedIn: linkedin.com/in/leonaruebet
              </span>
            </div>
            <div className="flex items-start animate-pulse elevated-card p-3 rounded-md">
              <span className="text-primary mr-2">$</span>
              <span className="text-white/90">_</span>
            </div>
          </div>
        </div>

        {/* Animated Title */}
        <div 
          key={titleIndex}
          className="animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 sm:mb-8 px-2 flex flex-col items-center"
        >
          <span className="neon-text mb-2 animate-glow">{currentTitle.line1}</span>
          <span className="text-white glass-effect px-6 py-2 rounded-lg">{currentTitle.line2}</span>
        </div>
      </div>
    </section>
  )
} 