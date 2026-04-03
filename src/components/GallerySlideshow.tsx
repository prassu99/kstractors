import { useCallback, useEffect, useState } from 'react'
import { dealershipGalleryCaption } from '../data/dealershipGallery'

const MANIFEST_URL = '/gallery/manifest.json'
const SLIDE_MS = 5000

type Manifest = { images: string[] }

export function GallerySlideshow() {
  const [images, setImages] = useState<string[]>([])
  const [loadError, setLoadError] = useState(false)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [imgOpacity, setImgOpacity] = useState(1)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const ac = new AbortController()
    fetch(MANIFEST_URL, { signal: ac.signal })
      .then((r) => {
        if (!r.ok) throw new Error('manifest')
        return r.json() as Promise<Manifest>
      })
      .then((data) => {
        const list = Array.isArray(data.images) ? data.images : []
        setImages(list)
        setLoadError(false)
      })
      .catch(() => {
        setImages([])
        setLoadError(true)
      })
    return () => ac.abort()
  }, [])

  const count = images.length
  const safeIndex = count ? index % count : 0
  const currentSrc = count ? `/gallery/${images[safeIndex]}` : ''

  useEffect(() => {
    if (reduceMotion) {
      setImgOpacity(1)
      return
    }
    setImgOpacity(0)
    const id = window.setTimeout(() => setImgOpacity(1), 40)
    return () => window.clearTimeout(id)
  }, [safeIndex, reduceMotion])

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count <= 0) return
      setIndex((i) => (i + dir + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (count <= 1 || paused) return
    const t = window.setInterval(() => {
      if (document.visibilityState === 'visible') go(1)
    }, SLIDE_MS)
    return () => window.clearInterval(t)
  }, [count, paused, go])

  useEffect(() => {
    setIndex(0)
  }, [count])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  if (loadError && count === 0) {
    return (
      <div className="rounded-2xl border border-base-300 bg-base-200 p-8 text-center text-base-content/75">
        <p className="mb-2 font-medium text-base-content">Could not load gallery list.</p>
        <p className="text-sm">
          Run <code className="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">npm run dev</code>{' '}
          or <code className="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">npm run build</code>{' '}
          so <code className="font-mono text-xs">public/gallery/manifest.json</code> is generated, then
          add images to <code className="font-mono text-xs">public/gallery/</code>.
        </p>
      </div>
    )
  }

  if (count === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/50 p-10 text-center text-base-content/70">
        <p className="mb-2 font-medium">No images in the gallery folder yet.</p>
        <p className="text-sm">
          Add <code className="font-mono text-xs">.jpg</code>, <code className="font-mono text-xs">.png</code>
          , or <code className="font-mono text-xs">.webp</code> files to{' '}
          <code className="font-mono text-xs">public/gallery/</code>, then restart dev or rebuild — the
          slideshow updates automatically.
        </p>
      </div>
    )
  }

  return (
    <div
      className="overflow-hidden rounded-2xl border border-base-300 bg-base-300/40 shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex min-h-[min(70vh,560px)] items-center justify-center bg-base-300/30 p-2 md:p-4">
        <button
          type="button"
          className="btn btn-circle btn-ghost absolute left-1 z-10 border border-base-300 bg-base-200/80 text-base-content md:left-3"
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="btn btn-circle btn-ghost absolute right-1 z-10 border border-base-300 bg-base-200/80 text-base-content md:right-3"
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          ›
        </button>

        <img
          src={currentSrc}
          alt=""
          className="max-h-[min(70vh,560px)] w-full object-contain object-center"
          style={{
            opacity: reduceMotion ? 1 : imgOpacity,
            transition: reduceMotion ? undefined : 'opacity 0.45s ease',
          }}
          decoding="async"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-base-300 bg-base-200/80 px-4 py-3">
        {images.map((file, i) => (
          <button
            key={file}
            type="button"
            className={`h-2.5 rounded-full transition-all ${
              i === safeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-base-content/25 hover:bg-base-content/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === safeIndex}
            onClick={() => {
              setPaused(true)
              setIndex(i)
            }}
          />
        ))}
      </div>

      <p className="border-t border-base-300 px-4 py-3 text-center text-sm text-base-content/70">
        {dealershipGalleryCaption}
        <span className="mt-1 block text-xs text-base-content/50">
          {safeIndex + 1} / {count}
          {paused ? ' · Paused (hover)' : ''}
          {' · '}
          <span className="whitespace-nowrap"></span>
        </span>
      </p>
    </div>
  )
}
