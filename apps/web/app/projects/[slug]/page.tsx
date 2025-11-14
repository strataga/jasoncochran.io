import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'
import rehypePrettyCode from 'rehype-pretty-code'
import { CodeBlock } from '@/components/code-block'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Project Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-slate-200 dark:border-slate-700 prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
            Case Study
          </div>
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

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              ← Back to all projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Discuss Your Project
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
