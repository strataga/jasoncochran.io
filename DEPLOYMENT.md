# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., jasoncochran.io)
   - Update DNS records as instructed

### Environment Variables (if needed)

None required for basic deployment.

## 🏗️ Build Locally

Test production build before deploying:

```bash
cd apps/web
npm run build
npm start
```

Visit http://localhost:3000

## 📊 Performance Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Image optimization (Next.js Image component ready)
- ✅ CSS optimization (Tailwind CSS purge)
- ✅ Font optimization
- ✅ SEO metadata

## 🎯 Pre-Deployment Checklist

- [ ] Update personal information in all pages
- [ ] Add your profile photo
- [ ] Replace placeholder projects with real ones
- [ ] Add actual blog posts
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify contact information
- [ ] Test dark mode
- [ ] Update domain in metadata (apps/web/app/layout.tsx)
- [ ] Add favicon and icons to public folder

## 🖼️ Add Your Photo

Replace the placeholder in `apps/web/app/page.tsx` (around line 109):

```tsx
{/* Update this section with your actual photo */}
<Image
  src="/your-photo.jpg"
  alt="Jason Cochran"
  fill
  className="object-cover"
  priority
/>
```

Add your photo to `apps/web/public/your-photo.jpg`

## 🎨 Create Favicon & Icons

Create the following files in `apps/web/public/`:
- `favicon.ico` (32x32)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

You can use [Favicon Generator](https://favicon.io/) to create these.

## 📱 Test Deployment

After deploying:
1. Test all pages load correctly
2. Verify responsive design on mobile
3. Check dark mode works
4. Test all internal links
5. Verify contact links (email, phone, LinkedIn)
6. Check blog posts display correctly

## 🔧 Troubleshooting

**Build Fails:**
- Check all imports are correct
- Verify no TypeScript errors: `npm run type-check`
- Ensure all dependencies are installed

**Styles Not Working:**
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

**Images Not Loading:**
- Ensure images are in `public/` folder
- Check file paths are correct
- Use Next.js Image component for optimization

## 📈 Analytics (Optional)

Add Vercel Analytics for free:
1. Enable in Vercel dashboard
2. No code changes needed

Add Google Analytics:
1. Get tracking ID
2. Add to `app/layout.tsx`

## 🎉 Post-Deployment

After successful deployment:
1. Share your portfolio URL
2. Update LinkedIn with portfolio link
3. Add to resume
4. Share on social media
5. Monitor analytics

Your live site will be at: `https://your-project.vercel.app`

With custom domain: `https://jasoncochran.io`
