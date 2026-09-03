import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export const BLOG_INFOGRAPHIC_MARKER = '<!-- infographic:architecture-accountability-loop -->'

export type BlogPostSummary = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTimeMinutes: number
  heroImage?: string
  heroAlt?: string
  infographic?: string
}

export type BlogPost = BlogPostSummary & {
  content: string
}

type BlogFrontmatter = {
  title?: unknown
  date?: unknown
  summary?: unknown
  tags?: unknown
  heroImage?: unknown
  heroAlt?: unknown
  infographic?: unknown
}

const blogDirectory = path.join(process.cwd(), 'content', 'blog')
const validSlug = /^[a-z0-9-]+$/

function requireString(value: unknown, field: string, slug: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Blog post "${slug}" is missing a valid ${field}.`)
  }

  return value.trim()
}

function optionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined
}

export function calculateReadingTime(content: string): number {
  const words = content
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/[^\p{L}\p{N}'’-]+/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(words / 220))
}

export function parseBlogSource(slug: string, source: string): BlogPost {
  if (!validSlug.test(slug)) {
    throw new Error(`Invalid blog slug: "${slug}".`)
  }

  const { data, content } = matter(source)
  const frontmatter = data as BlogFrontmatter
  const date = requireString(frontmatter.date, 'date', slug)
  const heroImage = optionalString(frontmatter.heroImage)
  const heroAlt = optionalString(frontmatter.heroAlt)
  const parsedDate = new Date(`${date}T00:00:00Z`)

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date
  ) {
    throw new Error(`Blog post "${slug}" has an invalid date.`)
  }

  if (
    !Array.isArray(frontmatter.tags) ||
    frontmatter.tags.length === 0 ||
    frontmatter.tags.some((tag) => typeof tag !== 'string' || tag.trim().length === 0)
  ) {
    throw new Error(`Blog post "${slug}" is missing valid tags.`)
  }

  if (content.trim().length === 0) {
    throw new Error(`Blog post "${slug}" has no article content.`)
  }

  if (heroImage && (!/^\/[a-z0-9/_\-.]+$/i.test(heroImage) || heroImage.includes('..'))) {
    throw new Error(`Blog post "${slug}" has an invalid heroImage path.`)
  }

  if (heroImage && !heroAlt) {
    throw new Error(`Blog post "${slug}" requires heroAlt when heroImage is set.`)
  }

  return {
    slug,
    title: requireString(frontmatter.title, 'title', slug),
    date,
    summary: requireString(frontmatter.summary, 'summary', slug),
    tags: frontmatter.tags.map((tag) => tag.trim()),
    readingTimeMinutes: calculateReadingTime(content),
    heroImage,
    heroAlt,
    infographic: optionalString(frontmatter.infographic),
    content: content.trim(),
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!validSlug.test(slug)) return null

  try {
    const source = await readFile(path.join(blogDirectory, `${slug}.md`), 'utf8')
    return parseBlogSource(slug, source)
  } catch (error) {
    if (
      error instanceof Error &&
      'code' in error &&
      (error as NodeJS.ErrnoException).code === 'ENOENT'
    ) {
      return null
    }

    throw error
  }
}

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const files = await readdir(blogDirectory)
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, '')
        const post = await getBlogPost(slug)
        if (!post) {
          throw new Error(`Unable to load blog post "${slug}".`)
        }

        return {
          slug: post.slug,
          title: post.title,
          date: post.date,
          summary: post.summary,
          tags: post.tags,
          readingTimeMinutes: post.readingTimeMinutes,
          heroImage: post.heroImage,
          heroAlt: post.heroAlt,
          infographic: post.infographic,
        }
      })
  )

  return posts.sort(
    (left, right) =>
      Date.parse(right.date) - Date.parse(left.date) || left.title.localeCompare(right.title)
  )
}

export function getRelatedPosts(
  current: BlogPostSummary,
  posts: BlogPostSummary[],
  limit = 3
): BlogPostSummary[] {
  const currentTags = new Set(current.tags.map((tag) => tag.toLowerCase()))

  return posts
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length,
    }))
    .sort(
      (left, right) =>
        right.sharedTags - left.sharedTags ||
        Date.parse(right.post.date) - Date.parse(left.post.date) ||
        left.post.title.localeCompare(right.post.title)
    )
    .slice(0, Math.max(0, limit))
    .map(({ post }) => post)
}
