import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const galleryDir = path.join(__dirname, '..', 'public', 'gallery')
const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'])
const skip = new Set(['readme.txt', 'manifest.json', '.ds_store'])

let images = []
try {
  if (fs.existsSync(galleryDir)) {
    images = fs
      .readdirSync(galleryDir)
      .filter((name) => {
        const lower = name.toLowerCase()
        if (skip.has(lower)) return false
        const ext = path.extname(name).toLowerCase()
        return allowed.has(ext)
      })
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  }
} catch {
  images = []
}

const outPath = path.join(galleryDir, 'manifest.json')
fs.mkdirSync(galleryDir, { recursive: true })
fs.writeFileSync(outPath, JSON.stringify({ images }, null, 2), 'utf8')
console.log(`[gallery-manifest] ${images.length} image(s) → public/gallery/manifest.json`)
