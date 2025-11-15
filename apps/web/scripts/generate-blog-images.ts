#!/usr/bin/env tsx

import Replicate from 'replicate'
import { getAllPosts, type BlogPost } from '../lib/blog'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

async function generateImagePrompt(post: BlogPost): Promise<string> {
  // Create a descriptive prompt based on blog content
  const topics = post.tags?.slice(0, 3).join(', ') || 'technology'

  // Base prompt focused on technical/professional imagery
  const prompt = `A professional, modern, abstract illustration representing: ${post.title}.

Theme: ${post.description}
Style: Clean, minimal, tech-focused with gradients of blue, purple, and pink.
Topics: ${topics}
Mood: Professional, innovative, cutting-edge technology.
Format: Wide aspect ratio, suitable for blog header.
No text or words in the image.`

  return prompt
}

async function downloadImage(url: string, filepath: string): Promise<void> {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  fs.writeFileSync(filepath, Buffer.from(buffer))
}

async function generateBlogImages(force: boolean = false) {
  const posts = getAllPosts()
  console.log(`Found ${posts.length} blog posts`)

  if (!process.env.REPLICATE_API_TOKEN) {
    console.error('Error: REPLICATE_API_TOKEN environment variable is required')
    console.log('Get your token at: https://replicate.com/account/api-tokens')
    process.exit(1)
  }

  for (const post of posts) {
    const imagePath = path.join(__dirname, '..', 'public', 'blog', post.slug, 'ai-generated.png')
    const imageDir = path.dirname(imagePath)

    // Skip if image already exists and force flag is not set
    if (fs.existsSync(imagePath) && !force) {
      console.log(`⏭️  Skipping ${post.slug} (image already exists)`)
      continue
    }

    console.log(`\n🎨 Generating image for: ${post.title}`)

    try {
      // Ensure directory exists
      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true })
      }

      // Generate prompt
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

      console.log(`✅ Saved: ${imagePath}`)
    } catch (error) {
      console.error(`❌ Error generating image for ${post.slug}:`, error)
      // Continue with next post instead of failing entire process
      continue
    }

    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n✨ Image generation complete!')
}

// Parse command line arguments
const args = process.argv.slice(2)
const force = args.includes('--force')

if (args.includes('--help')) {
  console.log(`
Usage: npm run generate-blog-images [options]

Options:
  --force    Regenerate all images, even if they already exist
  --help     Show this help message

Environment variables:
  REPLICATE_API_TOKEN    Your Replicate API token (required)
                         Get it at: https://replicate.com/account/api-tokens
`)
  process.exit(0)
}

generateBlogImages(force)
