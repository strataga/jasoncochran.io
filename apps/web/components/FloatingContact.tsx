'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function FloatingContact() {
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') {
    return null
  }

  return (
    <div className="floating-contact">
      <a href="/contact" className="floating-contact-link">
        <div className="floating-photo">
          <Image
            src="/images/jason-avatar.jpg"
            alt="Jason Cochran"
            width={100}
            height={100}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div className="floating-chat-bubble">
          <span className="chat-text">Hey there! Need somethin&apos;?</span>
          <span className="chat-cta">Send me a message →</span>
        </div>
      </a>
    </div>
  )
}
