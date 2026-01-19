'use client'

import { useState } from 'react'

export function CodeBlock({ children, ...props }: any) {
  const [copied, setCopied] = useState(false)

  // Extract the code text from children
  const getCodeText = () => {
    if (!children || !children.props) return ''

    const code = children.props.children
    if (typeof code === 'string') return code

    // Handle nested structure
    if (Array.isArray(code)) {
      return code
        .map(child => {
          if (typeof child === 'string') return child
          if (child?.props?.children) {
            if (typeof child.props.children === 'string') return child.props.children
            if (Array.isArray(child.props.children)) {
              return child.props.children
                .map((c: any) => typeof c === 'string' ? c : c?.props?.children || '')
                .join('')
            }
          }
          return ''
        })
        .join('\n')
    }

    return ''
  }

  const copyToClipboard = async () => {
    const code = getCodeText()
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Extract filename from code comment or data attribute
  const getFilename = () => {
    const code = getCodeText()
    // Check for file path in first line comment
    const firstLine = code.split('\n')[0]

    // Match patterns like: // path/to/file.ts or # path/to/file.py
    const commentMatch = firstLine.match(/^(?:\/\/|#)\s*(.+\.[a-z]+)/)
    if (commentMatch) {
      return commentMatch[1].trim()
    }

    return null
  }

  const filename = getFilename()

  return (
    <div className="relative group my-6">
      {filename && (
        <div className="flex items-center justify-between bg-slate-800 dark:bg-slate-900 text-slate-200 px-4 py-2 rounded-t-xl border-b border-slate-700">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-mono font-medium">{filename}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-md transition-colors"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      )}
      {!filename && (
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      )}
      <div className={filename ? 'rounded-t-none rounded-b-xl overflow-hidden' : ''}>
        <pre {...props}>{children}</pre>
      </div>
    </div>
  )
}
