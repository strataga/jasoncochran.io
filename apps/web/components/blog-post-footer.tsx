import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function BlogPostFooter() {
  return (
    <div className="mt-12 space-y-8">
      {/* Divider */}
      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Author Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl border-2 border-blue-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Author Photo */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800">
              <Image
                src="/jason_cochran_photo2.png"
                alt="Jason Cochran"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Jason Cochran
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Sofware Engineer | Cloud Consultant | Founder at Strataga
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              28 years of experience building enterprise software for oil & gas operators and startups.
              Specializing in SCADA systems, field data solutions, and AI-powered rapid development.
              Based in Midland, TX serving the Permian Basin.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Midland, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+14322607580" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  (432) 260-7580
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:jason.cochran@strataga.io" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  jason.cochran@strataga.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 pt-6 border-t border-blue-200 dark:border-slate-700">
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/projects/wellos"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700 text-center"
            >
              View WellOS Platform
            </Link>
            <Link
              href="/oil-gas"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-slate-200 dark:border-slate-700 text-center"
            >
              Oil & Gas Services
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Blog Link */}
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all posts
        </Link>
      </div>
    </div>
  )
}
