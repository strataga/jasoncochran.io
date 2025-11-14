import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Featured projects and case studies by Jason Cochran. Enterprise-grade applications built with modern technologies.',
  openGraph: {
    title: 'Projects - Jason Cochran',
    description: 'Featured projects and case studies showcasing enterprise-grade architecture',
    type: 'website',
  },
}

interface Project {
  id: number
  title: string
  subtitle: string
  slug: string
  description: string
  architectureHighlights: string[]
  techStack: string[]
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Catalyst PSA Platform',
    subtitle: 'Enterprise SaaS • 320K+ LOC',
    slug: 'catalyst-psa-platform',
    description: 'Professional Services Automation platform with comprehensive project management, time tracking, resource allocation, and financial management capabilities.',
    architectureHighlights: [
      'Hexagonal Architecture with 61 identified patterns',
      'CQRS pattern for scalable data operations',
      'Domain-Driven Design with bounded contexts',
      'Multi-tenant SaaS with organization isolation',
    ],
    techStack: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Drizzle'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'WellOS',
    subtitle: 'Oil & Gas SaaS • Multi-Platform',
    slug: 'wellos',
    description: 'Comprehensive Oil & Gas field operations platform with offline-first capabilities, real-time data sync, and multi-platform support for web and mobile.',
    architectureHighlights: [
      '6 integrated applications (Web, Mobile, Admin, API, Sync, Dashboard)',
      'Offline-first architecture with automatic sync',
      'Database-agnostic design pattern',
      'Real-time field data collection and reporting',
    ],
    techStack: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'MongoDB', 'SQLite', 'Drizzle'],
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade applications showcasing modern architecture patterns and development practices
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700"
            >
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Architecture Highlights
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {project.architectureHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => {
                    const colors = [
                      'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
                      'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
                      'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
                    ]
                    return (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${colors[index % colors.length]} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* View Case Study Link */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline hover:gap-3 transition-all group-hover:translate-x-1"
              >
                View Full Case Study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl border-2 border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            100+ Projects Delivered
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Over 27 years, I've delivered hundreds of successful projects across various industries including
            healthcare, finance, oil & gas, and professional services.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The featured projects above represent recent enterprise-grade applications showcasing modern architecture patterns.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm available for consulting, contract work, and full-time opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
            <Link
              href="/resume"
              className="inline-block px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-slate-200 dark:border-slate-700"
            >
              View Resume
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
