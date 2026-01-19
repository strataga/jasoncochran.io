'use client'

import { useState } from 'react'
import { Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
  description: string
}

export function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Share this article</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Help others discover this content</p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 bg-[#0077B5] hover:bg-[#006399] rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              LinkedIn
            </span>
          </a>

          {/* Twitter/X */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5 text-white dark:text-slate-900" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Twitter
            </span>
          </a>

          {/* Facebook */}
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 bg-[#1877F2] hover:bg-[#166FE5] rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share on Facebook"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Facebook
            </span>
          </a>

          {/* Reddit */}
          <a
            href={shareLinks.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 bg-[#FF4500] hover:bg-[#E63E00] rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share on Reddit"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Reddit
            </span>
          </a>

          {/* Hacker News */}
          <a
            href={shareLinks.hackernews}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 bg-[#FF6600] hover:bg-[#E55A00] rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share on Hacker News"
          >
            <svg className="w-5 h-5 text-white font-bold" fill="currentColor" viewBox="0 0 24 24">
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="monospace">Y</text>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Hacker News
            </span>
          </a>

          {/* Email */}
          <a
            href={shareLinks.email}
            className="group relative w-11 h-11 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Share via email"
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Email
            </span>
          </a>

          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="group relative w-11 h-11 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="w-5 h-5 text-white" />
            ) : (
              <Link2 className="w-5 h-5 text-white" />
            )}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {copied ? 'Copied!' : 'Copy link'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
