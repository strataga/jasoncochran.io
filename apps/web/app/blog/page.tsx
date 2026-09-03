import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import { getAllBlogPosts, type BlogPostSummary } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Architecture & Engineering Notes',
  description:
    'Practical writing from Jason Cochran on software architecture, production engineering, applied AI, and lessons from 28 years of building systems.',
  alternates: { canonical: 'https://jasoncochran.io/blog' },
  openGraph: {
    type: 'website',
    url: 'https://jasoncochran.io/blog',
    title: 'Architecture & Engineering Notes | Jason Cochran',
    description:
      'Practical writing on software architecture, production engineering, applied AI, and building systems that hold up in production.',
  },
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}

function PostMeta({ post }: { post: BlogPostSummary }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="h-4 w-4" aria-hidden="true" />
        {post.readingTimeMinutes} min read
      </span>
    </div>
  )
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const [featuredPost, ...morePosts] = posts
  const collectionData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Architecture & Engineering Notes',
    url: 'https://jasoncochran.io/blog',
    description:
      'Practical writing from Jason Cochran on architecture, engineering, and applied AI.',
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://jasoncochran.io/blog/${post.slug}`,
      datePublished: post.date,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionData).replace(/</g, '\\u003c'),
        }}
      />

      <section className="bg-hero-bg text-hero-foreground">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Architecture &amp; engineering notes
          </p>
          <h1 className="max-w-4xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            What holds up after the diagram is done
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted">
            Practical lessons on architecture, production engineering, and applied AI from 28 years
            of building software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {featuredPost ? (
          <article className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-lg)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-72 bg-hero-bg lg:min-h-[460px]">
              {featuredPost.heroImage ? (
                <Image
                  src={featuredPost.heroImage}
                  alt={featuredPost.heroAlt ?? ''}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(var(--hero-bg)),rgb(var(--primary)/0.75))]" />
              )}
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Latest essay
              </p>
              <PostMeta post={featuredPost} />
              <h2 className="mt-5 text-3xl leading-tight tracking-tight sm:text-4xl">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                {featuredPost.summary}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Read the article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ) : (
          <p className="text-muted-foreground">The first article is coming soon.</p>
        )}

        {morePosts.length > 0 ? (
          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  More writing
                </p>
                <h2 className="mt-2 text-2xl tracking-tight sm:text-3xl">
                  Engineering field notes
                </h2>
              </div>
              <p className="hidden text-sm text-muted-foreground sm:block">
                {posts.length} published articles
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {morePosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-sm)] transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <PostMeta post={post} />
                  <h3 className="mt-4 text-2xl leading-snug tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-muted-foreground">{post.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Article topics">
                    {post.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
