import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/project1.png',
    link: '#',
    tags: ['Next.js', 'React', 'TypeScript'],
    category: 'Web Development',
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my work in technology and business development
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5"
          >
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 