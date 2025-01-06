import Image from 'next/image'
import Link from 'next/link'

const companies = [
  {
    name: 'Starters',
    logo: '/starters.png',
    description: 'A tech startup focused on AI-driven solutions for business automation and optimization.',
    role: 'Founder & CEO',
    year: '2022 - Present',
    link: '#',
  },
  {
    name: 'The Station',
    logo: '/station.png',
    description: 'An innovative platform connecting businesses with emerging technology solutions.',
    role: 'Founder & CTO',
    year: '2021 - Present',
    link: '#',
  },
]

export function Companies() {
  return (
    <section className="py-16 glass-effect">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tighter neon-text">Founder of...</h2>
          <p className="text-white opacity-80">
            Leading innovative companies in technology and business solutions
          </p>
        </div>
        <div 
          className="grid gap-8 md:grid-cols-2 lg:gap-12"
          style={{
            opacity: 0,
            animation: 'fade-in 0.5s ease-out forwards',
          }}
        >
          {companies.map((company, index) => (
            <Link
              href={company.link}
              key={company.name}
              className="elevated-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300"
              style={{
                opacity: 0,
                animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`,
              }}
            >
              <div className="relative flex items-center gap-6">
                <div className="relative h-16 w-40 flex-shrink-0">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white opacity-70">
                    <span className="font-medium neon-text">{company.role}</span>
                    <span>•</span>
                    <span>{company.year}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white opacity-80">
                {company.description}
              </p>
              <div className="mt-4 text-sm font-medium neon-text group-hover:animate-glow">
                Learn more
                <svg
                  className="ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 