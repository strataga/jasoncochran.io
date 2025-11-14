import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jason Cochran. Available for consulting, full-time opportunities, and technical discussions.',
  openGraph: {
    title: 'Contact Jason Cochran',
    description: 'Get in touch for consulting, opportunities, or technical discussions',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm available for consulting, full-time opportunities, and technical discussions.
            Let's build something exceptional together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:jason.cochran@strataga.io"
            className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-xl hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 break-all">jason.cochran@strataga.io</p>
          </a>

          <a
            href="tel:+14322607580"
            className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-xl hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">(432) 260-7580</p>
          </a>

          <a
            href="https://www.linkedin.com/in/cochranjason/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-pink-500 dark:hover:border-pink-400 transition-all hover:shadow-xl hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">/in/cochranjason</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-slate-200 dark:border-slate-700">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Send a Message
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Location & Availability */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400">Midland, Texas</p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Open to remote opportunities</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Availability</h3>
            <p className="text-slate-600 dark:text-slate-400">Open to new opportunities</p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Consulting & full-time roles</p>
          </div>
        </div>
      </div>
    </div>
  )
}
