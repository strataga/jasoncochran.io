# Blog Image Generation

This script generates AI-powered images for blog posts using Replicate's FLUX model.

## Setup

1. Get a Replicate API token from https://replicate.com/account/api-tokens

2. Add it to your `.env` file:
   ```bash
   REPLICATE_API_TOKEN=r8_your_token_here
   ```

## Usage

### Generate images for all posts
```bash
npm run generate-blog-images
```

This will:
- Read all blog posts from `/content/blog`
- Generate an AI image for each post based on its title, description, and tags
- Save images to `/public/blog/[slug]/ai-generated.png`
- Skip posts that already have images (unless `--force` is used)

### Regenerate all images
```bash
npm run generate-blog-images -- --force
```

### Automatic generation on build
Images are automatically generated before each build via the `prebuild` script in `package.json`.

## How it works

1. **Prompt Generation**: For each blog post, the script creates a descriptive prompt using:
   - Post title
   - Post description
   - First 3 tags
   - Professional/technical styling guidelines

2. **Image Generation**: Calls Replicate's FLUX Schnell model with:
   - 16:9 aspect ratio (perfect for blog headers)
   - PNG format at 90% quality
   - ~$0.003 per image cost

3. **Storage**: Images are saved as static files in `/public/blog/[slug]/ai-generated.png`

## Cost Estimation

- **Per image**: ~$0.003
- **37 blog posts**: ~$0.11 total
- **Regeneration**: Only pay when using `--force` or adding new posts

## Notes

- Images are committed to git as static assets
- Generation takes ~2-3 seconds per image
- Rate limiting: 1 second delay between requests
- Failed generations don't stop the entire process
