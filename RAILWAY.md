# Railway Deployment Guide

## Prerequisites

- [Railway account](https://railway.app)
- [Railway CLI](https://docs.railway.app/develop/cli) (optional)
- Gmail account with 2FA enabled and an App Password

## Environment Variables

Set these in Railway dashboard under "Variables":

```
GMAIL_USER=your-gmail-address@example.com
GMAIL_APP_PASSWORD=your_16_character_app_password
CONTACT_TO_EMAIL=me@jasoncochran.io
```

## Deployment Methods

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Railway**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Next.js and configure build settings

3. **Configure Environment Variables**
   - Click on your service
   - Go to "Variables" tab
   - Add the environment variables listed above

4. **Deploy**
   - Railway will automatically deploy on every push to main
   - Access your app at the generated Railway URL

### Method 2: Deploy with Railway CLI

1. **Install Railway CLI**

   ```bash
   npm i -g @railway/cli
   ```

2. **Login**

   ```bash
   railway login
   ```

3. **Initialize Project**

   ```bash
   # From the repo root
   railway init
   ```

4. **Add Environment Variables**

   ```bash
   railway variable set GMAIL_USER=your-gmail-address@example.com
   railway variable set GMAIL_APP_PASSWORD=your_16_character_app_password
   railway variable set CONTACT_TO_EMAIL=me@jasoncochran.io
   ```

5. **Deploy**

   ```bash
   railway up
   ```

## Build Configuration

Railway auto-detects Next.js. Default settings:

- **Install Command**: `cd apps/web && npm ci`
- **Build Command**: `cd apps/web && npm run build`
- **Start Command**: `cd apps/web && npm start` (runs the standalone server)
- **Root Directory**: repo root

These are customized in root `railway.json` and `nixpacks.toml`. Keep
`apps/web/package-lock.json` in sync with `apps/web/package.json`; Railway's
clean install fails closed when they drift.

## Custom Domain

1. **Add Domain in Railway**
   - Go to your service
   - Click "Settings" > "Domains"
   - Click "Custom Domain"
   - Enter your domain (e.g., jasoncochran.io)

2. **Update DNS**
   - Add CNAME record pointing to Railway's provided domain
   - Or use Railway's nameservers

3. **Update Metadata**
   - Update `metadataBase` in `apps/web/app/layout.tsx`
   - Update URLs in `apps/web/app/sitemap.ts`

## Gmail SMTP Configuration

1. **Generate an App Password**
   - Enable 2FA on the Gmail account.
   - Go to <https://myaccount.google.com/apppasswords>.
   - Generate a 16-character App Password for the site.

2. **Set Railway variables**
   - `GMAIL_USER`: Gmail account address.
   - `GMAIL_APP_PASSWORD`: 16-character App Password, stored only in Railway.
   - `CONTACT_TO_EMAIL`: recipient for contact-form notifications.

## Health Check

Railway will automatically check if your app is healthy by hitting the root URL.

You can customize health checks in Railway settings if needed.

## Monitoring

- **Logs**: View in Railway dashboard under "Deployments" > "View Logs"
- **Metrics**: CPU, Memory, Network usage in Railway dashboard
- **Alerts**: Configure in Railway settings

## Continuous Deployment

Railway automatically deploys when you push to your main branch.

To disable auto-deploy:

- Go to service settings
- Disable "Auto Deploy"

## Rollbacks

If a deployment fails:

1. Go to "Deployments" tab
2. Click on a previous successful deployment
3. Click "Redeploy"

## Environment-Specific Variables

For staging/production environments:

1. Create separate Railway services for each environment
2. Use different environment variables for each
3. Deploy different branches (e.g., `develop` for staging, `main` for production)

## Troubleshooting

**Build Failures:**

- Check logs in Railway dashboard
- Verify all dependencies are in package.json
- Ensure Node version compatibility (Railway uses Node 18+ by default)

**Contact Form Not Working:**

- Verify `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_TO_EMAIL` are set
- Confirm the Gmail account has 2FA enabled and the App Password has not been revoked
- Check Railway runtime logs for `/api/contact` mailer errors without printing secrets

**Styles Not Loading:**

- Check build logs for Tailwind CSS errors
- Verify postcss.config.mjs is present
- Clear Railway cache and redeploy

## Cost Optimization

- Railway offers $5/month free credit
- Optimize images and assets
- Consider adding caching headers
- Use Railway's built-in CDN

## Security

- Never commit `.env` file
- Use Railway's environment variables for secrets
- Enable HTTPS (automatic with Railway)
- Keep dependencies updated

## Support

- [Railway Documentation](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
- [Railway Status](https://status.railway.app)
