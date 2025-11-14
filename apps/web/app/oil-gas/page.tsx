import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle2, Zap, Shield, Clock, TrendingUp, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permian Basin Oil & Gas Software Consulting | Jason Cochran',
  description: 'Specialized software consulting for Permian Basin oil & gas operators. SCADA systems, field data solutions, production tracking, compliance automation. 27 years experience. Midland, TX.',
  keywords: ['Permian Basin', 'Oil & Gas Consulting', 'SCADA Development', 'Field Data Solutions', 'Upstream Software', 'Production Tracking', 'Compliance Automation', 'Midland TX', 'WellOS', 'Real-Time Monitoring'],
  openGraph: {
    title: 'Permian Basin Oil & Gas Software Consulting',
    description: 'Expert software consulting for Permian Basin operators. SCADA, field data, production tracking. Based in Midland, TX.',
    type: 'website',
    url: 'https://jasoncochran.io/oil-gas',
  },
  alternates: {
    canonical: 'https://jasoncochran.io/oil-gas',
  },
}

export default function OilGasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              Permian Basin Specialist
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oil & Gas Software Consulting
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Specialized software development for Permian Basin oil & gas operators. SCADA integration,
              field data solutions, production tracking, and compliance automation.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 mt-4">
              Based in Midland, TX • Serving the Permian Basin • 27 Years Experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/projects/wellos"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-slate-200 dark:border-slate-700"
            >
              View WellOS Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Why Permian Basin Operators Choose Me */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Permian Basin Operators Work With Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I understand the unique challenges of Permian Basin operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
              <Database className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Local Expertise</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Based in Midland, TX with deep understanding of Permian Basin field operations, connectivity challenges,
                and regulatory requirements specific to West Texas operators.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-purple-200 dark:border-slate-700">
              <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Real-Time SCADA</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Expert in OPC UA, Modbus TCP, and MQTT integration. Built systems handling 1000s of tags
                per second with sub-second latency for critical monitoring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-pink-200 dark:border-slate-700">
              <Shield className="w-12 h-12 text-pink-600 dark:text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Offline-First Design</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Built for unreliable field connectivity. Mobile and desktop apps work 100% offline with
                automatic sync when connection available—critical for remote Permian Basin locations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
              <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Rapid Development</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                AI-assisted workflows deliver production-ready MVPs in 6-8 weeks. Get your field operations
                modernized quickly without the typical 6-12 month development timeline.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-purple-200 dark:border-slate-700">
              <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Compliance Automation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Texas RRC reporting (W-10, G-1, G-5) and EPA compliance built-in. Automated emissions
                calculations, flaring reports, and audit trails reduce regulatory risk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-pink-200 dark:border-slate-700">
              <CheckCircle2 className="w-12 h-12 text-pink-600 dark:text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">27 Years Experience</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Built enterprise software for Key Energy Services, Big D Companies, Enertia Software, and more.
                Deep expertise in oil & gas operations and data systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Consulting Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized software solutions for upstream oil & gas operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">SCADA Integration & Monitoring</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>OPC UA, Modbus TCP, MQTT protocol integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Real-time dashboards with sub-second data refresh</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Alarm management with Teams/email notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>TimescaleDB time-series optimization (20x faster)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Multi-well monitoring and heat map visualization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Field Data Solutions</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Offline-first mobile apps (iOS/Android) for field operators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Production entry, tank levels, maintenance logging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Photo capture with GPS tagging and automatic sync</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Rugged desktop apps for field laptops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Event sourcing sync with conflict resolution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Production & Compliance</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Daily oil, gas, water tracking with trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated Texas RRC reporting (W-10, G-1, G-5)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Emissions calculations (flaring, venting, methane)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Decline curve analysis and EUR forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Complete audit trail for regulatory compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Custom Development</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Legacy system modernization (PHP → React/Next.js)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>QuickBooks integration for accounting automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>ML-powered equipment failure prediction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Multi-tenant SaaS platform development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>API integrations and data migration services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WellOS Showcase */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Case Study
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WellOS: The Operating System for Upstream Operators
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive SaaS platform built specifically for Permian Basin upstream operators.
                Real-time SCADA monitoring, offline field data capture, production tracking, predictive
                maintenance, and automated RRC compliance reporting—all in one modern platform.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">&lt;1s</div>
                  <div className="text-blue-100">SCADA Data Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Offline Functional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">6 Apps</div>
                  <div className="text-blue-100">Integrated Platform</div>
                </div>
              </div>
              <Link
                href="/projects/wellos"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View Full Case Study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade tools built for oil & gas operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700 text-center">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Backend</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>Rust + Axum</div>
                <div>Node.js + NestJS</div>
                <div>PostgreSQL</div>
                <div>TimescaleDB</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700 text-center">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Frontend</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>Next.js 15</div>
                <div>React 19</div>
                <div>TypeScript</div>
                <div>Tailwind CSS</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700 text-center">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Mobile</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>React Native</div>
                <div>Expo</div>
                <div>Electron</div>
                <div>SQLite</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700 text-center">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Protocols</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>OPC UA</div>
                <div>Modbus TCP</div>
                <div>MQTT</div>
                <div>WebSockets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how modern software can streamline your Permian Basin operations.
            From SCADA integration to mobile field data capture, I'll help you replace legacy
            systems with modern, reliable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+14322607580"
              className="px-8 py-4 bg-purple-900/50 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
            >
              Call (432) 260-7580
            </a>
          </div>
          <p className="text-blue-100 mt-6">
            Based in Midland, TX • Serving Permian Basin Operators • 27 Years Experience
          </p>
        </div>
      </section>
    </div>
  )
}
