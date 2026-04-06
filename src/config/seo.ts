/**
 * Canonical origin (no trailing slash). Production: https://kstractorsmahindra.com
 * Override in Cloudflare / .env: VITE_SITE_URL=https://yourdomain.com
 */
const raw = import.meta.env.VITE_SITE_URL as string | undefined
export const SITE_URL = (raw?.replace(/\/$/, '').trim() || 'https://kstractorsmahindra.com').trim()

/** Homepage and absolute links — trailing slash matches sitemap & Google preferred home URL */
export const SITE_HOME_URL = `${SITE_URL}/`

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`
export const DEFAULT_OG_IMAGE_ALT =
  'KS Tractors and Implements — authorized Mahindra tractor dealer and showroom, Jangaon, Telangana'

/** Short suffix for inner pages’ <title> (aligns with site branding) */
export const TITLE_SUFFIX = 'KS Tractors and Implements · Jangaon'

/**
 * Rich local description for JSON-LD (dealership + showroom + brand variants searchers use).
 */
export const LOCAL_BUSINESS_SEO_DESCRIPTION =
  'Authorized Mahindra tractor dealership and showroom in Jangaon, Telangana — KS Tractors and Implements (Mahindra KS Tractors Jangaon). New tractors, service, genuine parts on Suryapet Road for Jangaon and nearby areas.'

export const defaultMeta = {
  title: `Mahindra Tractors in Jangaon | KS Tractors — Dealership & Showroom`,
  description:
    'Mahindra & KS Tractors in Jangaon: authorized tractor dealership and tractor showroom on Suryapet Road. New Mahindra tractors, service, parts — your local dealer for Jangaon and nearby. WhatsApp & Facebook.',
} as const
