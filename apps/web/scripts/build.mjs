import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const webDirectory = path.resolve(scriptDirectory, '..')
const nextCli = path.resolve(webDirectory, '../../node_modules/next/dist/bin/next')

const build = spawnSync(process.execPath, [nextCli, 'build'], {
  cwd: webDirectory,
  env: process.env,
  stdio: 'inherit',
})

if (build.error) {
  console.error(`Unable to start the Next.js build: ${build.error.message}`)
  process.exit(1)
}

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

// The preparation script copies static and public assets beside the standalone
// server so Railway can run the same output that passed this build.
await import('./prepare-standalone.mjs')
