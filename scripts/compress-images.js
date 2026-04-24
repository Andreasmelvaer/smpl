#!/usr/bin/env node
/**
 * Compress oversized images in public/images in-place.
 *
 * Strategy:
 *   - JPG/JPEG → re-encode to JPG quality 82, progressive, mozjpeg
 *   - PNG → PNG with compressionLevel 9, palette where possible
 *   - WEBP → quality 82
 *   - Large PNGs (>1MB) get resized down to max 1920px on the longest edge
 *
 * Skips files that are already smaller than the threshold (500 KB).
 */

const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..', 'public', 'images')
const THRESHOLD_BYTES = 500 * 1024 // 500 KB
const MAX_EDGE = 1920
const JPG_QUALITY = 82
const WEBP_QUALITY = 82

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

async function compress(file) {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return null

  const stat = await fs.stat(file)
  if (stat.size < THRESHOLD_BYTES) return null

  const input = await fs.readFile(file)
  let pipeline = sharp(input)
  const meta = await pipeline.metadata()

  // Resize if either dimension exceeds MAX_EDGE
  if ((meta.width && meta.width > MAX_EDGE) || (meta.height && meta.height > MAX_EDGE)) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  let buffer
  if (ext === '.png') {
    buffer = await pipeline
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toBuffer()
  } else if (ext === '.webp') {
    buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer()
  } else {
    buffer = await pipeline
      .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
      .toBuffer()
  }

  if (buffer.length >= stat.size) {
    return { file, before: stat.size, after: stat.size, saved: 0, skipped: true }
  }

  await fs.writeFile(file, buffer)
  return {
    file,
    before: stat.size,
    after: buffer.length,
    saved: stat.size - buffer.length,
    skipped: false,
  }
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function main() {
  const files = await walk(ROOT)
  const results = []
  for (const file of files) {
    try {
      const result = await compress(file)
      if (result) results.push(result)
    } catch (err) {
      console.error(`Failed: ${file} — ${err.message}`)
    }
  }

  const totalSaved = results.reduce((s, r) => s + r.saved, 0)
  const compressed = results.filter((r) => !r.skipped)

  console.log('\n=== Compression report ===\n')
  for (const r of compressed.sort((a, b) => b.saved - a.saved)) {
    const rel = path.relative(path.join(__dirname, '..'), r.file)
    console.log(
      `${rel}\n  ${fmt(r.before)} → ${fmt(r.after)}  (saved ${fmt(r.saved)})`
    )
  }
  console.log(`\nFiles processed: ${results.length}`)
  console.log(`Files actually compressed: ${compressed.length}`)
  console.log(`Total saved: ${fmt(totalSaved)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
