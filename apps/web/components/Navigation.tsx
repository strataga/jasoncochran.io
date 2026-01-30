'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SOCIAL_LINKS } from '@/lib/social'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certifications' },
    { href: 'https://blog.jasoncochran.io', label: 'Blog', external: true },
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
            {links.map((link) => {
              const isActive = !link.external && pathname === link.href
              const className = `transition-all font-semibold text-sm uppercase tracking-wide ${
                isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
              }`

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={className}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--pop-yellow)] transition-colors p-1"
                  aria-label={`Visit Jason Cochran on ${link.label}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
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
            {links.map((link) => {
              const isActive = !link.external && pathname === link.href
              const className = `block py-2 font-semibold uppercase tracking-wide ${
                isActive ? 'text-yellow-300' : 'text-white'
              }`

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={className}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={className}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex flex-wrap gap-4 mt-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[var(--pop-yellow)] transition-colors"
                    aria-label={`Visit Jason Cochran on ${link.label}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                      {link.handle || link.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
