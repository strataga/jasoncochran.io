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

// Color palettes designed for white text overlay - all dark/rich backgrounds
const colorPalettes = [
  {
    name: 'Deep Ocean',
    colors: 'Deep navy blue, midnight blue, dark teal with subtle cyan highlights',
    mood: 'calm, deep, professional',
  },
  {
    name: 'Cosmic Purple',
    colors: 'Rich purple, deep violet, dark magenta with soft pink accents',
    mood: 'creative, innovative, mysterious',
  },
  {
    name: 'Forest Night',
    colors: 'Dark emerald green, deep forest green, black with subtle jade highlights',
    mood: 'natural, growth-oriented, grounded',
  },
  {
    name: 'Sunset Ember',
    colors: 'Deep burgundy, dark crimson, burnt orange fading to black',
    mood: 'warm, energetic, passionate',
  },
  {
    name: 'Midnight Gold',
    colors: 'Rich black, dark charcoal with elegant gold and amber accents',
    mood: 'premium, sophisticated, luxurious',
  },
  {
    name: 'Arctic Aurora',
    colors: 'Deep blue-black, dark indigo with ethereal green and cyan aurora wisps',
    mood: 'magical, inspiring, expansive',
  },
  {
    name: 'Volcanic',
    colors: 'Deep charcoal, obsidian black with molten orange and red undertones',
    mood: 'powerful, transformative, bold',
  },
  {
    name: 'Deep Space',
    colors: 'Pure black, dark purple-blue with distant star-like white specks and nebula hints',
    mood: 'infinite, exploratory, futuristic',
  },
]

// Visual styles that work well as backgrounds
const visualStyles = [
  {
    name: 'Flowing Gradients',
    elements: 'Smooth flowing gradients, soft color transitions, organic curves',
    composition: 'Sweeping diagonal flows, layered depth',
  },
  {
    name: 'Geometric Abstract',
    elements: 'Subtle geometric shapes, overlapping polygons, soft edges',
    composition: 'Balanced asymmetry, floating forms',
  },
  {
    name: 'Particle Field',
    elements: 'Scattered light particles, bokeh effects, glowing dots',
    composition: 'Depth of field, concentrated areas of light',
  },
  {
    name: 'Wave Forms',
    elements: 'Smooth wave patterns, sound wave aesthetics, flowing lines',
    composition: 'Horizontal movement, rhythmic patterns',
  },
  {
    name: 'Crystalline',
    elements: 'Faceted surfaces, light refraction, gem-like structures',
    composition: 'Angular elegance, prismatic effects',
  },
  {
    name: 'Smoke and Light',
    elements: 'Wispy smoke trails, volumetric lighting, soft diffusion',
    composition: 'Ethereal atmosphere, layered transparency',
  },
  {
    name: 'Topographic',
    elements: 'Contour lines, elevation patterns, map-like aesthetics',
    composition: 'Flowing terrain lines, organic structure',
  },
  {
    name: 'Neural Network',
    elements: 'Connected nodes, flowing data streams, network visualization',
    composition: 'Interconnected patterns, subtle complexity',
  },
]

// Use slug to create deterministic but varied selection
function getSeededElement<T>(array: T[], seed: string): T {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return array[Math.abs(hash) % array.length]
}

async function generateImagePrompt(post: BlogPostMetadata): Promise<string> {
  const topics = post.tags?.slice(0, 3).join(', ') || 'technology'

  // Use slug to deterministically select palette and style (so regenerating same slug gives similar results)
  // but add randomness for truly new posts
  const palette = getSeededElement(colorPalettes, post.slug)
  const style = getSeededElement(visualStyles, post.slug + 'style')

  const prompt = `Abstract professional background for a technical blog about ${topics}.

Style: ${style.name} - ${style.elements}
Composition: ${style.composition}
Colors: ${palette.colors}
Mood: ${palette.mood}, professional, modern

Technical requirements:
- Dark background suitable for white text overlay
- Rich, saturated colors with good contrast
- Subtle complexity, not overwhelming
- High-end, premium aesthetic
- Soft ambient lighting with depth and dimension

CRITICAL: Completely abstract background image only. Absolutely NO text, NO words, NO letters, NO numbers, NO symbols of any kind. No logos, no icons, no readable elements whatsoever.
This will be used as a background for white text overlay - ensure sufficient dark areas for text legibility.`

  console.log(`   Palette: ${palette.name}`)
  console.log(`   Style: ${style.name}`)

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
