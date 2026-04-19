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
      { source: '/resume', destination: '/#experience', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/projects/:slug', destination: '/#projects', permanent: true },
    ]
  },
}

module.exports = nextConfig
