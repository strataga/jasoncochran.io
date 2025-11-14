import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const tags = new Set<string>()

  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })

  return Array.from(tags).map(tag => ({
    tag: encodeURIComponent(tag)
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: encodedTag } = await params
  const tag = decodeURIComponent(encodedTag)
  const allPosts = getAllPosts()
  const filteredPosts = allPosts.filter(post => post.tags?.includes(tag))

  return {
    title: `${tag} - Blog Posts | Jason Cochran`,
    description: `${filteredPosts.length} blog ${filteredPosts.length === 1 ? 'post' : 'posts'} about ${tag}. Topics include software development, AI-assisted development, modern tech stack, and enterprise architecture.`,
    openGraph: {
      title: `${tag} - Blog Posts | Jason Cochran`,
      description: `Browse ${filteredPosts.length} blog ${filteredPosts.length === 1 ? 'post' : 'posts'} about ${tag}`,
      type: 'website',
      url: `https://jasoncochran.io/blog/tag/${encodedTag}`,
    },
    alternates: {
      canonical: `https://jasoncochran.io/blog/tag/${encodedTag}`,
    },
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: encodedTag } = await params
  const tag = decodeURIComponent(encodedTag)
  const allPosts = getAllPosts()
  const filteredPosts = allPosts.filter(post =>
    post.tags?.includes(tag)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to all posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
            Tag
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {tag}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} tagged with "{tag}"
          </p>
        </header>

        {/* Blog Posts List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl border-2 border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              No posts found with this tag.
            </p>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all posts
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
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
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((postTag) => (
                        <span
                          key={postTag}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            postTag === tag
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {postTag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Read more →
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
