'use client'

import { useState } from 'react'
import { Check, Linkedin, Link2, Mail, Share2 } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
  description: string
}

export function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const [status, setStatus] = useState('')

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(url)
      setStatus('Link copied')
      window.setTimeout(() => setStatus(''), 2000)
    } catch {
      setStatus('Copy failed. Select the address from your browser.')
    }
  }

  async function shareArticle() {
    if (!navigator.share) {
      await copyToClipboard()
      return
    }

    try {
      await navigator.share({ title, text: description, url })
      setStatus('Share sheet opened')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setStatus('Sharing was unavailable. You can copy the link instead.')
    }
  }

  const linkClass =
    'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary'

  return (
    <section
      className="rounded-2xl border border-border bg-muted/50 p-5 sm:p-6"
      aria-labelledby="share-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="share-heading" className="text-base font-semibold text-foreground">
            Share this article
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Send it to someone working through a similar architecture decision.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={shareArticle} className={linkClass}>
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            X
          </a>
          <a
            href={`mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`}
            className={linkClass}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <button type="button" onClick={copyToClipboard} className={linkClass}>
            {status === 'Link copied' ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Link2 className="h-4 w-4" aria-hidden="true" />
            )}
            Copy link
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {status}
      </p>
    </section>
  )
}
