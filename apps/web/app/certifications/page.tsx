import Link from 'next/link'
import type { Metadata } from 'next'
import { Award, ExternalLink, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications and credentials. Microsoft Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900), and more.',
  openGraph: {
    title: 'Jason Cochran - Certifications',
    description: 'Microsoft Azure and AI certifications',
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
    color: 'blue',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/AFE0258379C78FC6?sharingId=955379E09D280B0D',
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    code: 'AI-900',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Fundamental AI concepts and Azure AI services for machine learning, computer vision, and natural language processing.',
    skills: ['AI Workloads', 'Machine Learning', 'Computer Vision', 'NLP', 'Azure AI Services'],
    color: 'purple',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/88863517C68C1A2E?sharingId=955379E09D280B0D',
  },
]

const upcomingCertifications = [
  {
    name: 'Microsoft Azure Administrator Associate',
    code: 'AZ-104',
    description: 'Azure infrastructure and administration',
    color: 'purple',
  },
  {
    name: 'Microsoft Azure Developer Associate',
    code: 'AZ-204',
    description: 'Advanced Azure development skills',
    color: 'pink',
  },
  {
    name: 'Microsoft Azure Solutions Architect Expert',
    code: 'AZ-305',
    description: 'Enterprise architecture on Azure',
    color: 'blue',
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8">
            <Award className="w-4 h-4" />
            Professional Certifications
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Certifications & Credentials
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Staying current with the latest cloud and AI technologies through continuous learning and certification
          </p>
        </div>
      </section>

      {/* Current Certifications */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Current Certifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Verified credentials demonstrating expertise in cloud and AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 bg-${cert.color}-100 dark:bg-${cert.color}-900/30 text-${cert.color}-700 dark:text-${cert.color}-300 rounded-full text-sm font-bold mb-3`}>
                      {cert.code}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <Award className="w-16 h-16 text-blue-500 dark:text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
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
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Certifications */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              In Progress
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Currently pursuing additional certifications to expand expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCertifications.map((cert) => (
              <div
                key={cert.code}
                className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border-2 border-dashed border-slate-300 dark:border-slate-700"
              >
                <div className={`inline-block px-3 py-1 bg-${cert.color}-100 dark:bg-${cert.color}-900/30 text-${cert.color}-700 dark:text-${cert.color}-300 rounded-full text-sm font-bold mb-3`}>
                  {cert.code}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Continuous Learning
            </h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              With 27 years in the industry, I've learned that staying current is non-negotiable.
              These certifications complement my real-world experience with validated knowledge of
              the latest cloud and AI technologies.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Combining practical enterprise experience with cutting-edge platform knowledge means
              I can architect solutions that leverage the best of both worlds: proven patterns and
              modern capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Build on Azure
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Need cloud-native applications or AI integration? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Start a Project
            </Link>
            <Link
              href="/resume"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
