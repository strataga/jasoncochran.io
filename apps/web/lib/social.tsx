import { ComponentType } from 'react'
import { Linkedin, Youtube } from 'lucide-react'

export type SocialLink = {
  key: 'x' | 'linkedin' | 'youtube'
  label: string
  href: string
  handle?: string
  icon: ComponentType<{ className?: string }>
}

// Temporarily hidden
// export const CONTACT_EMAIL = 'me@jasoncochran.io'
// export const CONTACT_LOCATION = 'Midland, TX'
// export const CALENDLY_URL = 'https://cal.com/jcochranio/intro'

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cochranjason/',
    handle: 'LinkedIn',
    icon: Linkedin,
  },
  {
    key: 'x',
    label: 'X',
    href: 'https://x.com/jcochranio',
    handle: '@jcochranio',
    icon: XIcon,
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@jcochranio',
    handle: '@jcochranio',
    icon: Youtube,
  },
]
