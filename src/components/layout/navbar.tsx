'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' }
]

export function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg font-bold neon-text">leo.naruebet</div>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <span
                key={link.href}
                className="text-sm text-white opacity-80"
              >
                {link.label}
              </span>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link 
          href="/" 
          className="text-lg font-bold neon-text"
        >
          leo.naruebet
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === link.href
                  ? 'neon-text font-medium'
                  : 'text-white opacity-80 hover:opacity-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 