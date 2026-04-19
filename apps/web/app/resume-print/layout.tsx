import type { Metadata } from 'next'
import './print.css'

export const metadata: Metadata = {
  title: 'Jason Cochran — Resume (Print)',
  description:
    'Print-optimized resume source page for Jason Cochran. Used internally to generate the resume PDF; not intended for human browsing.',
  robots: { index: false, follow: false },
}

// Print-only wrapper. The root layout (app/layout.tsx) still renders
// <Navigation />, but print.css hides any element outside .resume-print-root
// when rendered through a print medium or when this class is present on
// the body via the page-level marker. Puppeteer invokes Chromium's
// print path (page.pdf), which triggers @media print.
export default function ResumePrintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="resume-print-root">{children}</div>
}
