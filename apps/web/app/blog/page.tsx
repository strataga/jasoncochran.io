import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on software architecture, development practices, and lessons learned from 27 years of building enterprise applications. Topics include React, Next.js, NestJS, TypeScript, and AI-assisted development.',
  keywords: ['Software Development Blog', 'React', 'Next.js', 'TypeScript', 'Architecture', 'NestJS', 'AI Development'],
  openGraph: {
    title: 'Blog - Jason Cochran',
    description: 'Software development insights and lessons learned from 27 years of experience',
    type: 'website',
    url: 'https://jasoncochran.io/blog',
  },
  alternates: {
    canonical: 'https://jasoncochran.io/blog',
  },
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Insights on software architecture, development practices, and lessons learned from 27 years of building enterprise applications
          </p>
        </header>

        {/* Blog Posts List */}
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl border-2 border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              No blog posts yet. Check back soon!
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Posts will appear here once you add MDX files to the content/blog directory
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-slate-200 dark:border-slate-700"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Read more →
                  </p>
                </Link>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
