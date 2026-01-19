import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const IMAGES_DIR = path.join(process.cwd(), 'public', 'blog')
const EXPORT_DIR = path.join(process.cwd(), 'ghost-export')
const IMAGE_BASE_URL = 'https://jasoncochran.io'

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
  tags: string[]
}

function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))

  return files.map(filename => {
    const filePath = path.join(CONTENT_DIR, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      content: content,
      tags: data.tags || []
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function convertToHtml(mdxContent: string): string {
  // Remove any JSX/React components
  let cleanContent = mdxContent
    .replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, '')
    .replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, '')

  // Convert markdown to HTML
  let html = marked(cleanContent) as string

  // Convert relative image paths to absolute URLs
  html = html.replace(/src="\/blog\//g, `src="${IMAGE_BASE_URL}/blog/`)

  return html
}

function formatGhostDate(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day} 00:00:00`
}

function createGhostExport(): void {
  console.log('Starting Ghost export with absolute URLs...')

  if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR, { recursive: true })
  }

  const posts = getAllPosts()
  console.log(`Found ${posts.length} posts`)

  const authorId = '1'
  const users = [{
    id: authorId,
    name: 'Jason Cochran',
    slug: 'jason-cochran',
    email: 'jason@jasoncochran.io',
    roles: ['Owner']
  }]

  const tagSet = new Set<string>()
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)))

  const tagMap = new Map<string, string>()
  let tagIdCounter = 1
  const tags = Array.from(tagSet).map(tagName => {
    const id = String(tagIdCounter++)
    tagMap.set(tagName, id)
    return {
      id,
      slug: tagName.toLowerCase().replace(/\s+/g, '-'),
      name: tagName.charAt(0).toUpperCase() + tagName.slice(1).replace(/-/g, ' ')
    }
  })

  const ghostPosts: any[] = []
  const postsMeta: any[] = []
  const postsTags: any[] = []
  const postsAuthors: any[] = []

  let postIdCounter = 1

  for (const post of posts) {
    const postId = String(postIdCounter++)
    const html = convertToHtml(post.content)
    const featureImage = `${IMAGE_BASE_URL}/blog/${post.slug}/ai-generated.png`
    const ghostDate = formatGhostDate(post.date)

    ghostPosts.push({
      id: postId,
      title: post.title,
      slug: post.slug,
      html,
      feature_image: featureImage,
      type: 'post',
      status: 'published',
      visibility: 'public',
      created_at: ghostDate,
      updated_at: ghostDate,
      published_at: ghostDate,
      custom_excerpt: post.description
    })

    postsMeta.push({
      post_id: postId,
      feature_image_alt: post.title,
      feature_image_caption: null
    })

    postsAuthors.push({
      post_id: postId,
      author_id: authorId
    })

    for (const tag of post.tags) {
      const tagId = tagMap.get(tag)
      if (tagId) {
        postsTags.push({
          post_id: postId,
          tag_id: tagId
        })
      }
    }
  }

  const ghostExport = {
    db: [{
      meta: {
        exported_on: Date.now(),
        version: '5.0.0'
      },
      data: {
        posts: ghostPosts,
        posts_meta: postsMeta,
        tags,
        posts_tags: postsTags,
        users,
        posts_authors: postsAuthors
      }
    }]
  }

  const exportPath = path.join(EXPORT_DIR, 'ghost-import.json')
  fs.writeFileSync(exportPath, JSON.stringify(ghostExport, null, 2))

  const fileSizeKB = (fs.statSync(exportPath).size / 1024).toFixed(0)

  console.log(`\nExport complete!`)
  console.log(`  - Posts: ${ghostPosts.length}`)
  console.log(`  - Tags: ${tags.length}`)
  console.log(`  - File size: ${fileSizeKB} KB`)
  console.log(`  - Images: ${IMAGE_BASE_URL}/blog/[slug]/ai-generated.png`)
  console.log(`  - Export: ${exportPath}`)
}

createGhostExport()
