import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { ArrowLeft } from 'lucide-react'

type ProjectFrontmatter = {
  subtitle?: string
  techStack?: string[]
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

async function readProject(slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null

  try {
    const source = await readFile(path.join(projectsDirectory, `${slug}.md`), 'utf8')
    const { data, content } = matter(source)
    const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim()
    if (!title) return null

    return {
      title,
      content,
      frontmatter: data as ProjectFrontmatter,
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const files = await readdir(projectsDirectory)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ slug: file.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await readProject(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.frontmatter.subtitle,
    alternates: { canonical: `https://jasoncochran.io/projects/${slug}` },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await readProject(slug)
  if (!project) notFound()

  const body = project.content.replace(/^#\s+.+$/m, '').trim()
  const html = await marked.parse(body)

  return (
    <article className="min-h-screen py-16 lg:py-24">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to featured projects
        </Link>

        <header className="mb-10 border-b border-border pb-8">
          <p className="text-sm uppercase tracking-[0.08em] text-primary mb-3">Project case study</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{project.title}</h1>
          {project.frontmatter.subtitle ? (
            <p className="text-lg text-muted-foreground">{project.frontmatter.subtitle}</p>
          ) : null}
          {project.frontmatter.techStack?.length ? (
            <ul className="flex flex-wrap gap-2 mt-6" aria-label="Technology stack">
              {project.frontmatter.techStack.map((technology) => (
                <li key={technology} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <div
          className="prose prose-slate max-w-none prose-headings:tracking-tight prose-a:text-primary prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  )
}
