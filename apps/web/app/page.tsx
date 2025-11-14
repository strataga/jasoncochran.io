import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jason Cochran - Software Engineer | Founder of Strataga | AI-Powered Development',
  description: 'Senior Software Engineer with 27 years experience. Founder of Strataga building WellOS and Catalyst PSA. AI-assisted workflows for rapid enterprise development. Ship MVPs in weeks, not months.',
  keywords: ['Jason Cochran', 'Software Engineer', 'Strataga', 'WellOS', 'Catalyst PSA', 'AI Development', 'React', 'Next.js', 'NestJS', 'Rust', 'Midland TX', 'Azure Certified'],
  openGraph: {
    title: 'Jason Cochran - Software Engineer & Founder | AI-Powered Development',
    description: 'Founder of Strataga. 27 years experience building enterprise applications. AI-enhanced workflows for rapid development.',
    type: 'website',
    url: 'https://jasoncochran.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran - Software Engineer & Founder',
    description: 'Building WellOS and Catalyst PSA. AI-powered development workflows.',
  },
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jason Cochran',
    jobTitle: 'Founder & CEO, Senior Software Engineer',
    description: 'Senior Software Engineer with 27 years of experience. Founder of Strataga LLC, building WellOS and Catalyst PSA platforms. Specializes in AI-assisted development for rapid enterprise application delivery.',
    url: 'https://jasoncochran.io',
    email: 'jason.cochran@strataga.io',
    telephone: '+14322607580',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Midland',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/cochranjason/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Strataga, LLC',
      url: 'https://strataga.io',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'NestJS',
      'Rust',
      'PostgreSQL',
      'MongoDB',
      'Azure',
      'AWS',
      'AI-Assisted Development',
      'Full-Stack Development',
      'Enterprise Architecture',
      'Multi-tenant SaaS',
      'SCADA Integration',
      'Oil & Gas Technology',
    ],
    alumniOf: 'Self-taught Software Engineer',
    award: [
      'Microsoft Azure Fundamentals (AZ-900)',
      'Microsoft Azure AI Fundamentals (AI-900)',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 grid-pattern opacity-10"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold">
                  Available for Rapid MVP Development
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-slate-900 dark:text-white mb-2">Jason Cochran</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Senior Software Engineer
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  Rapid-fire development for startups and fast-moving teams. 27 years of experience + cutting-edge AI tooling =
                  ship MVPs in weeks, not months. Enterprise-grade architecture at startup speed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    Let's Work Together
                  </Link>
                  <Link
                    href="/resume"
                    className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-slate-200 dark:border-slate-700"
                  >
                    View Resume
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start pt-6">
                  <a
                    href="https://www.linkedin.com/in/cochranjason/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 group"
                    aria-label="Connect with Jason Cochran on LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                    <span className="text-lg">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:jason.cochran@strataga.io"
                    className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border-2 border-slate-200 dark:border-slate-700 group"
                    aria-label="Email Jason Cochran"
                  >
                    <Mail className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                    <span className="text-lg">Email</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">27+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects Delivered</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Technologies</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Photo Placeholder */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

                  {/* Photo Container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-900">
                    <Image
                      src="/jason_cochran_photo2.png"
                      alt="Jason Cochran - Senior Software Engineer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Recent case studies showcasing enterprise-grade architecture and modern development practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Catalyst PSA Project */}
              <div className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Catalyst PSA Platform</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Enterprise SaaS • 320K+ LOC</p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Professional Services Automation platform with comprehensive project management, time tracking,
                  resource allocation, and financial management capabilities.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Architecture Highlights</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Hexagonal Architecture with 61 identified patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>CQRS pattern for scalable data operations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Domain-Driven Design with bounded contexts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Multi-tenant SaaS with organization isolation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">Next.js</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">NestJS</span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">PostgreSQL</span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">Drizzle</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/projects/catalyst-psa-platform"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group-hover:translate-x-1"
                >
                  View Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* WellOS Project */}
              <div className="group bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">WellOS</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Oil & Gas SaaS • Multi-Platform</p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Comprehensive Oil & Gas field operations platform with offline-first capabilities,
                  real-time data sync, and multi-platform support for web and mobile.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Platform Features</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>6 integrated applications (Web, Mobile, Admin, API, Sync, Dashboard)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Offline-first architecture with automatic sync</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Database-agnostic design pattern</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Real-time field data collection and reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Next.js</span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">NestJS</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">React Native</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">PostgreSQL</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">Drizzle</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/projects/wellos"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all group-hover:translate-x-1"
                >
                  View Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View All Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Core Expertise
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive full-stack capabilities across modern web and mobile technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frontend</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>React & Next.js</li>
                  <li>React Native</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>State Management</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Backend</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Node.js & NestJS</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Microservices</li>
                  <li>Event-Driven Architecture</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Data & DevOps</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>PostgreSQL & MongoDB</li>
                  <li>Prisma & TypeORM</li>
                  <li>AWS & Cloud Services</li>
                  <li>Docker & CI/CD</li>
                  <li>Testing & Quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                How I Ship Faster
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Combining deep expertise with cutting-edge AI development tools for maximum velocity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">AI-Augmented Development</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Leveraging Claude Code, Cursor, and GitHub Copilot to accelerate development without sacrificing code quality.
                  AI handles boilerplate while I focus on architecture and business logic.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-purple-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Rapid Prototyping</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Using modern frameworks like Next.js and NestJS with pre-built patterns to go from concept to working prototype in days.
                  Real progress, real fast.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-pink-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Patterns</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  27 years of architectural experience means your MVP is built on solid foundations. Scale from prototype to production
                  without rewrites.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Agile Iteration</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ship fast, get feedback, iterate. Modern development workflows with continuous deployment mean features go live
                  in hours, not weeks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-purple-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Quality at Speed</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  AI-assisted testing and code review catch issues early. TypeScript end-to-end ensures type safety.
                  Fast doesn't mean fragile.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-pink-200 dark:border-slate-700">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Modern Stack Expertise</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Deep knowledge of React, Next.js, NestJS, PostgreSQL, and modern DevOps.
                  The right tools for rapid, scalable development.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg hover:gap-3 transition-all"
              >
                Read about my development process
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need to Ship Fast?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Specializing in rapid MVP development for startups. Leveraging AI-assisted workflows and 27 years of experience
              to deliver production-ready code at unprecedented speed. Let's turn your idea into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
              </Link>
              <Link
                href="/resume"
                className="px-8 py-4 bg-purple-900/50 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
