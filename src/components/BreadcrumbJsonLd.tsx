import { useLocation } from 'react-router-dom'
import { SITE_HOME_URL, SITE_URL } from '../config/seo'

const ROUTE_LABEL: Record<string, string> = {
  about: 'About',
  models: 'Tractor models',
  'service-parts': 'Service & implements',
  gallery: 'Gallery',
  contact: 'Contact',
}

/** BreadcrumbList for inner routes — helps Google show trail in results */
export function BreadcrumbJsonLd() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  if (path === '/') return null

  const segment = path.slice(1)
  const name = ROUTE_LABEL[segment]
  if (!name) return null

  const pageUrl = `${SITE_URL}${path}`

  const payload = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_HOME_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
