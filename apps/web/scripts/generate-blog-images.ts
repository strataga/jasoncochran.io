#!/usr/bin/env tsx

import 'dotenv/config'
import Replicate from 'replicate'
import { getAllPosts, type BlogPost } from '../lib/blog'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

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

async function generateImagePrompt(post: BlogPost): Promise<string> {
  const topics = post.tags?.slice(0, 3).join(', ') || 'technology'

  // Use slug to deterministically select palette and style
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

async function generateBlogImages(force: boolean = false) {
  const posts = getAllPosts()
  console.log(`Found ${posts.length} blog posts`)

  if (!process.env.REPLICATE_API_TOKEN) {
    console.log('⚠️  REPLICATE_API_TOKEN not set, skipping image generation')
    console.log('Images should already be committed to git for production builds')
    return
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
