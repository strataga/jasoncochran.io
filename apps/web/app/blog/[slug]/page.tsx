import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'
import rehypePrettyCode from 'rehype-pretty-code'
import { CodeBlock } from '@/components/code-block'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: 'Jason Cochran' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Jason Cochran'],
      tags: post.tags,
      url: `https://jasoncochran.io/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://jasoncochran.io/blog/${slug}`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
          <time className="text-sm text-slate-500 dark:text-slate-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {post.description}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-700">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, {
                    theme: {
                      dark: 'github-dark',
                      light: 'github-light',
                    },
                    keepBackground: false,
                  }],
                ],
              },
            }}
            components={{
              pre: CodeBlock,
            }}
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
