import Link from 'next/link'
import type { Metadata } from 'next'
import { Award, ExternalLink, Calendar, BookOpen, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'AI and Cloud certifications. Microsoft Azure AI Fundamentals (AI-900), Azure Fundamentals (AZ-900), and continuous learning in AI-powered development.',
  openGraph: {
    title: 'Jason Cochran - AI & Cloud Certifications',
    description: 'Microsoft Azure and AI certifications for modern software development',
    type: 'website',
    url: 'https://jasoncochran.io/certifications',
  },
}

const certifications = [
  {
    name: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
    skills: ['Cloud Concepts', 'Azure Services', 'Security & Compliance', 'Azure Pricing'],
    color: 'red' as const,
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/AFE0258379C78FC6?sharingId=955379E09D280B0D',
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    code: 'AI-900',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Fundamental AI concepts and Azure AI services for machine learning, computer vision, and natural language processing.',
    skills: ['AI Workloads', 'Machine Learning', 'Computer Vision', 'NLP', 'Azure AI Services'],
    color: 'yellow' as const,
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/88863517C68C1A2E?sharingId=955379E09D280B0D',
  },
]

const upcomingCertifications = [
  {
    name: 'Microsoft Azure Administrator Associate',
    code: 'AZ-104',
    description: 'Azure infrastructure and administration',
  },
  {
    name: 'Microsoft Azure Developer Associate',
    code: 'AZ-204',
    description: 'Advanced Azure development skills',
  },
  {
    name: 'Microsoft Azure Solutions Architect Expert',
    code: 'AZ-305',
    description: 'Enterprise architecture on Azure',
  },
]

const colorClasses = {
  red: 'bg-[var(--pop-red)]',
  yellow: 'bg-[var(--pop-yellow)]',
  blue: 'bg-[var(--pop-blue)]',
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-16">
      {/* Header */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header text-5xl md:text-6xl mb-6 mx-auto">
            CERTIFICATIONS & CREDENTIALS
          </h1>

          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Validating expertise in AI, cloud platforms, and modern software development through continuous learning
          </p>
        </div>
      </section>

      {/* Current Certifications */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="section-header text-3xl md:text-4xl mb-4">
              CURRENT CERTIFICATIONS
            </h2>
            <p className="text-lg text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
              Verified credentials demonstrating expertise in cloud and AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="project-card group"
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 w-full h-2 ${colorClasses[cert.color]}`}></div>

                <div className="flex items-start justify-between mb-6 pt-4">
                  <div className="flex-1">
                    <span className="tag-pop mb-3 inline-block">
                      {cert.code}
                    </span>
                    <h3 className="text-2xl text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <Award className="w-16 h-16 text-[var(--pop-yellow)] opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {cert.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--pop-black)] mb-3" style={{ fontFamily: 'var(--font-headline)' }}>SKILLS COVERED</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tag-pop"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--pop-red)] font-bold hover:gap-3 transition-all"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    VERIFY CREDENTIAL
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Certifications */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="section-header text-3xl md:text-4xl mb-4">
              IN PROGRESS
            </h2>
            <p className="text-lg text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
              Currently pursuing additional certifications to expand expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCertifications.map((cert) => (
              <div
                key={cert.code}
                className="card-pop p-6"
                style={{ borderStyle: 'dashed' }}
              >
                <span className="tag-pop mb-3 inline-block">
                  {cert.code}
                </span>
                <h3 className="text-xl text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                  {cert.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-pop p-8 md:p-12" style={{ background: 'var(--pop-black)' }}>
            <BookOpen className="w-12 h-12 text-[var(--pop-yellow)] mb-6" />
            <h2 className="text-3xl md:text-4xl text-[var(--pop-white)] mb-6" style={{ fontFamily: 'var(--font-headline)' }}>
              CONTINUOUS LEARNING
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              With 28 years in the industry, I've learned that staying current is non-negotiable.
              These certifications complement my real-world experience with validated knowledge of
              the latest cloud and AI technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Combining practical enterprise experience with cutting-edge platform knowledge means
              I can architect solutions that leverage the best of both worlds: proven patterns and
              modern capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-pop p-12">
            <Rocket className="w-12 h-12 text-[var(--pop-red)] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-[var(--pop-black)] mb-6" style={{ fontFamily: 'var(--font-headline)' }}>
              LET'S BUILD WITH AI
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Need AI-powered applications or automation solutions? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-pop btn-pop-primary"
              >
                START A PROJECT
              </Link>
              <Link
                href="/resume"
                className="btn-pop btn-pop-secondary"
              >
                VIEW RESUME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
