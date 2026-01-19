import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'
import rehypePrettyCode from 'rehype-pretty-code'
import { CodeBlock } from '@/components/code-block'
import { ArrowLeft, MessageCircle } from 'lucide-react'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: `Case study: ${project.title}`,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: `Detailed case study of ${project.title}`,
      type: 'article',
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--pop-red)] font-bold mb-8 hover:gap-3 transition-all"
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          <ArrowLeft className="w-5 h-5" />
          BACK TO PROJECTS
        </Link>

        {/* Project Content */}
        <div className="card-pop p-8 md:p-12">
          <span className="tag-pop mb-6 inline-block">
            Case Study
          </span>
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={project.content}
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
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t-4 border-[var(--pop-black)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--pop-red)] font-bold hover:gap-3 transition-all"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              <ArrowLeft className="w-5 h-5" />
              BACK TO ALL PROJECTS
            </Link>
            <Link
              href="/contact"
              className="btn-pop btn-pop-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              DISCUSS YOUR PROJECT
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
