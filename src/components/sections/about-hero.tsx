import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/leoebet', icon: 'fab fa-facebook' },
  { name: 'GitHub', href: 'https://github.com/leonaruebet', icon: 'fab fa-github' },
  { name: 'YouTube', href: 'https://www.youtube.com/@leonaruebet', icon: 'fab fa-youtube' },
  { name: 'Line', href: 'https://line.me/ti/p/~leo25462546', icon: 'fab fa-line' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/leonaruebet/', icon: 'fab fa-linkedin' },
]

export function AboutHero() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div 
          className="grid gap-8 md:grid-cols-2 lg:gap-12"
          style={{
            opacity: 0,
            animation: 'fade-in 0.5s ease-out forwards',
          }}
        >
          <div className="flex flex-col justify-center space-y-6">
            <div 
              className="space-y-4"
              style={{
                opacity: 0,
                animation: 'slide-in 0.5s ease-out forwards 0.2s',
              }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Naruebet Aungsirikulthumrong
              </h1>
              <p className="text-lg text-muted-foreground">
                I am a young entrepreneur passionate about{' '}
                <span className="text-primary">innovating new solutions</span> by leveraging{' '}
                <span className="text-primary">AI and data-driven</span> strategies. Using my expertise in{' '}
                <span className="text-primary">Business Development</span> and{' '}
                <span className="text-primary">Data Science</span>, I aim to create impactful, 
                technology-driven businesses.
              </p>
            </div>
            <div 
              className="flex flex-wrap gap-4"
              style={{
                opacity: 0,
                animation: 'slide-in 0.5s ease-out forwards 0.4s',
              }}
            >
              {socialLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-primary"
                  style={{
                    opacity: 0,
                    animation: `fade-in 0.5s ease-out forwards ${0.6 + index * 0.1}s`,
                  }}
                >
                  <span className="sr-only">{link.name}</span>
                  <i className={`${link.icon} text-lg`} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div 
              className="inline-flex items-center space-x-2"
              style={{
                opacity: 0,
                animation: 'slide-in 0.5s ease-out forwards 0.8s',
              }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Active and available for opportunities</span>
            </div>
          </div>
          <div 
            className="flex items-center justify-center"
            style={{
              opacity: 0,
              animation: 'fade-in 0.5s ease-out forwards 0.6s',
            }}
          >
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full border-2 border-border">
              <Image
                src="/profile.png"
                alt="Naruebet Aungsirikulthumrong"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 