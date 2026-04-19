#!/usr/bin/env node
/**
 * Generate the resume PDF from the /resume-print route.
 *
 * Usage (assumes a dev server is already running on http://localhost:3000):
 *   cd apps/web && node scripts/generate-resume-pdf.mjs
 *
 * The caller is responsible for starting `npm run dev` in apps/web and
 * killing it afterward. This script does NOT manage the server lifecycle,
 * so it stays simple and re-runnable.
 *
 * Puppeteer is installed as a --no-save devDep in apps/web/node_modules,
 * so run this script from apps/web (that's where node resolves 'puppeteer').
 *
 * Output: apps/web/public/jason-cochran-resume.pdf
 */

import puppeteer from 'puppeteer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// scripts/ lives at apps/web/scripts, so web root is one up
const WEB_ROOT = path.resolve(__dirname, '..')
const OUT_PATH = path.join(WEB_ROOT, 'public', 'jason-cochran-resume.pdf')
const URL = process.env.RESUME_URL || 'http://localhost:3000/resume-print'

async function main() {
  console.log(`[resume-pdf] launching headless chromium...`)
  const browser = await puppeteer.launch({
    headless: 'shell',
    args: ['--no-sandbox'],
  })

  try {
    const page = await browser.newPage()
    console.log(`[resume-pdf] navigating to ${URL}...`)
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })

    // Emulate screen media so the body:has(.resume-print-root) overrides in
    // print.css are applied consistently during PDF capture; @media print
    // rules also apply because page.pdf() triggers Chromium's print path.
    await page.emulateMediaType('screen')

    console.log(`[resume-pdf] writing pdf to ${OUT_PATH}...`)
    await page.pdf({
      path: OUT_PATH,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
        right: '0.5in',
      },
    })

    console.log(`[resume-pdf] done.`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(`[resume-pdf] failed:`, err)
  process.exit(1)
})
