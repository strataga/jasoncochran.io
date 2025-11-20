#!/usr/bin/env tsx

import 'dotenv/config'
import Replicate from 'replicate'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

interface BlogPostMetadata {
  slug: string
  title: string
  tags?: string[]
}

async function generateImagePrompt(post: BlogPostMetadata): Promise<string> {
  const topics = post.tags?.slice(0, 3).join(', ') || 'technology'

  const prompt = `Abstract professional background for a technical blog about ${topics}.

Style: Clean, modern, sophisticated abstract design.
Elements: Smooth gradients, subtle geometric shapes, flowing forms, minimal patterns.
Colors: Deep blues, purples, teals, and dark grays with subtle highlights.
Composition: Elegant, spacious, premium aesthetic suitable as a background.
Lighting: Soft ambient lighting, depth and dimension.
Mood: Professional, technical, innovative, modern.

IMPORTANT: Completely abstract background image only. Absolutely NO text, NO words, NO letters, NO numbers of any kind.
This will be used as a background for text overlay.`

  return prompt
}

async function downloadImage(url: string, filepath: string): Promise<void> {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  fs.writeFileSync(filepath, Buffer.from(buffer))
}

async function generateSingleBlogImage(slug: string, title: string, tags: string[]) {
  console.log(`\n🎨 Generating image for: ${title}`)

  if (!process.env.REPLICATE_API_TOKEN) {
    console.error('❌ REPLICATE_API_TOKEN not set in environment variables')
    console.log('   Get your token at: https://replicate.com/account/api-tokens')
    process.exit(1)
  }

  const imagePath = path.join(__dirname, '..', 'public', 'blog', slug, 'ai-generated.png')
  const imageDir = path.dirname(imagePath)

  try {
    // Ensure directory exists
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true })
      console.log(`   Created directory: ${imageDir}`)
    }

    // Generate prompt
    const post: BlogPostMetadata = { slug, title, tags }
    const prompt = await generateImagePrompt(post)
    console.log(`   Prompt: ${prompt.substring(0, 100)}...`)

    // Generate image using FLUX
    console.log('   Calling Replicate API...')
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt,
          aspect_ratio: "16:9",
          output_format: "png",
          output_quality: 90,
        }
      }
    ) as any

    // Download and save image
    const imageUrl = Array.isArray(output) ? output[0] : output
    console.log('   Downloading image...')
    await downloadImage(imageUrl, imagePath)

    console.log(`✅ Image saved successfully: ${imagePath}`)
    console.log(`\n🖼️  Image location: /public/blog/${slug}/ai-generated.png`)
  } catch (error) {
    console.error(`❌ Error generating image:`, error)
    process.exit(1)
  }
}

// Parse command line arguments
const args = process.argv.slice(2)

if (args.includes('--help') || args.length === 0) {
  console.log(`
Usage: tsx scripts/generate-single-blog-image.ts <slug> <title> <tags>

Arguments:
  slug     Blog post slug (e.g., "openspec-ai-driven-specification-workflow")
  title    Blog post title (e.g., "OpenSpec: Aligning AI and Developers")
  tags     Comma-separated tags (e.g., "ai,development-workflow,tools")

Example:
  tsx scripts/generate-single-blog-image.ts \\
    openspec-ai-driven-specification-workflow \\
    "OpenSpec: Aligning AI and Developers Through Spec-Driven Development" \\
    "ai,development-workflow,tools,architecture"

Environment variables:
  REPLICATE_API_TOKEN    Your Replicate API token (required)
                         Get it at: https://replicate.com/account/api-tokens
`)
  process.exit(0)
}

// Parse arguments
const slug = args[0]
const title = args[1] || 'Blog Post'
const tags = args[2] ? args[2].split(',').map(t => t.trim()) : ['technology']

console.log(`
📝 Generating blog image with:
   Slug: ${slug}
   Title: ${title}
   Tags: ${tags.join(', ')}
`)

generateSingleBlogImage(slug, title, tags)
