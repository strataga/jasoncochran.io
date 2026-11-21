/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  turbopack: {
    root: path.join(__dirname, '..', '..'),
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/projects/readyray', destination: '/projects/archgauge', permanent: true },
      { source: '/jason-cochran-architect-application.pdf', destination: '/jason-cochran-full-stack-resume.pdf', permanent: true },
      { source: '/jason-cochran-architect-resume.pdf', destination: '/jason-cochran-full-stack-resume.pdf', permanent: true },
    ]
  },
}

module.exports = nextConfig
