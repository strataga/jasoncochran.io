import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import { ArchitectureAccountabilityLoop } from '@/components/architecture-accountability-loop'
import { BlogInfographic } from '@/components/blog-infographic'
import { ShareButtons } from '@/components/share-buttons'
import { BLOG_INFOGRAPHIC_MARKER, getAllBlogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog'
import { renderProjectMarkdown } from '@/lib/project-markdown'

const siteUrl = 'https://jasoncochran.io'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}

  const canonical = `${siteUrl}/blog/${post.slug}`
  const metadataTitle = post.seoTitle ?? post.title
  const metadataDescription = post.seoDescription ?? post.summary

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: { canonical },
    authors: [{ name: 'Jason Cochran', url: siteUrl }],
    openGraph: {
      type: 'article',
      url: canonical,
      title: metadataTitle,
      description: metadataDescription,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [siteUrl],
      tags: post.tags,
      images: post.heroImage
        ? [{ url: post.heroImage, width: 1200, height: 630, alt: post.heroAlt ?? post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle,
      description: metadataDescription,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  const allPosts = await getAllBlogPosts()
  const relatedPosts = getRelatedPosts(post, allPosts)
  const canonical = `${siteUrl}/blog/${post.slug}`
  const sections = post.content.split(BLOG_INFOGRAPHIC_MARKER)
  const renderedSections = await Promise.all(sections.map(renderProjectMarkdown))
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: canonical,
    url: canonical,
    image: post.heroImage ? `${siteUrl}${post.heroImage}` : undefined,
    author: {
      '@type': 'Person',
      name: 'Jason Cochran',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Jason Cochran',
      url: siteUrl,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData).replace(/</g, '\\u003c') }}
      />

      <article>
        <header className="bg-hero-bg text-hero-foreground">
          <div className="mx-auto max-w-[1000px] px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm text-hero-muted transition-colors hover:text-hero-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All articles
            </Link>

            <ul className="mb-5 flex flex-wrap gap-2" aria-label="Article topics">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-hero-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <h1 className="max-w-4xl text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-hero-muted sm:text-xl">
              {post.summary}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/jason-cochran.jpg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <p className="text-sm font-semibold text-hero-foreground">Jason Cochran</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-hero-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {post.readingTimeMinutes} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {post.heroImage ? (
          <div className="mx-auto -mt-px max-w-[1200px] px-0 sm:px-6 lg:px-8">
            <div className="relative aspect-[2/1] overflow-hidden bg-muted sm:rounded-b-2xl">
              <Image
                src={post.heroImage}
                alt={post.heroAlt ?? ''}
                fill
                priority
                sizes="(min-width: 1200px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {renderedSections.map((html, index) => (
            <div key={index}>
              <div
                className="prose prose-lg prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-p:leading-8"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {index < renderedSections.length - 1 &&
              post.infographic === 'architecture-accountability-loop' ? (
                <ArchitectureAccountabilityLoop />
              ) : index < renderedSections.length - 1 && post.infographic ? (
                <BlogInfographic id={post.infographic} />
              ) : null}
            </div>
          ))}

          <div className="mt-14 border-t border-border pt-8">
            <ShareButtons title={post.title} url={canonical} description={post.summary} />
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 ? (
        <aside
          className="border-t border-border bg-muted/60"
          aria-labelledby="related-posts-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Keep reading
                </p>
                <h2 id="related-posts-heading" className="mt-2 text-2xl tracking-tight sm:text-3xl">
                  Related engineering notes
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-2 text-sm font-semibold text-foreground hover:text-primary sm:inline-flex"
              >
                View all
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-sm)]"
                >
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                    <span aria-hidden="true"> · </span>
                    {relatedPost.readingTimeMinutes} min read
                  </p>
                  <h3 className="mt-3 text-xl leading-snug tracking-tight">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {relatedPost.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </aside>
      ) : null}
    </>
  )
}
