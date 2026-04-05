import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_HOME_URL,
  SITE_URL,
} from '../config/seo'

type Props = {
  title: string
  description: string
  /** Path with leading slash, e.g. "/" or "/contact" */
  path: string
  noindex?: boolean
}

export function Seo({ title, description, path, noindex }: Props) {
  const pathname = path === '/' || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`
  const canonical =
    pathname === '/' ? SITE_HOME_URL : `${SITE_URL}${pathname.replace(/\/$/, '') || '/'}`

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KS Tractors and Implements — Jangaon" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content={DEFAULT_OG_IMAGE_ALT} />
    </Helmet>
  )
}
