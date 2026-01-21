'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Linkedin, Youtube } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'var(--pop-red)',
        borderBottom: '4px solid var(--pop-black)',
        boxShadow: '0 4px 0 var(--pop-black)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '0.02em' }}
          >
            Jason Cochran
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all font-semibold text-sm uppercase tracking-wide ${
                  pathname === link.href ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://x.com/jcochranio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
              aria-label="Follow Jason Cochran on X"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/cochranjason/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
              aria-label="View Jason Cochran's LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@jcochranio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
              aria-label="Subscribe to Jason Cochran on YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-4 space-y-2"
            style={{ borderTop: '3px solid var(--pop-black)' }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-semibold uppercase tracking-wide ${
                  pathname === link.href ? 'text-yellow-300' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-6 mt-4">
              <a
                href="https://x.com/jcochranio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                aria-label="Follow Jason Cochran on X"
              >
                <XIcon className="w-6 h-6" />
                <span className="font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                  @jcochranio
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/cochranjason/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                aria-label="View Jason Cochran's LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.youtube.com/@jcochranio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                aria-label="Subscribe to Jason Cochran on YouTube"
              >
                <Youtube className="w-6 h-6" />
                <span className="font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                  YouTube
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
