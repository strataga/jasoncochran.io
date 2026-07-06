import { cp, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const standaloneAppDir = path.join(appDir, '.next', 'standalone', 'apps', 'web')

async function copyDirectory(source, destination) {
  await rm(destination, { recursive: true, force: true })
  await mkdir(path.dirname(destination), { recursive: true })
  await cp(source, destination, { recursive: true })
}

await copyDirectory(path.join(appDir, '.next', 'static'), path.join(standaloneAppDir, '.next', 'static'))
await copyDirectory(path.join(appDir, 'public'), path.join(standaloneAppDir, 'public'))

console.log('Prepared standalone Next.js assets.')
