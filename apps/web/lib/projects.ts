import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/projects')

export interface Project {
  slug: string
  title: string
  content: string
  subtitle?: string
  accentColor?: 'red' | 'yellow' | 'blue'
  techStack?: string[]
  liveUrl?: string
}

export function getAllProjects(): Project[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { content } = matter(fileContents)

      // Extract title from first # heading
      const titleMatch = content.match(/^#\s+(.+)$/m)
      const title = titleMatch ? titleMatch[1] : slug

      return {
        slug,
        title,
        content,
      }
    })

  return allProjects
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)

    // Extract title from first # heading
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : slug

    return {
      slug,
      title,
      content,
      subtitle: data.subtitle as string | undefined,
      accentColor: data.accentColor as 'red' | 'yellow' | 'blue' | undefined,
      techStack: data.techStack as string[] | undefined,
      liveUrl: data.liveUrl as string | undefined,
    }
  } catch {
    return null
  }
}
