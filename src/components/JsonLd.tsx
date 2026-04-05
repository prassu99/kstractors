import { site } from '../config/site'
import { LOCAL_BUSINESS_SEO_DESCRIPTION, SITE_HOME_URL, SITE_URL } from '../config/seo'

const dealerId = `${SITE_URL}/#dealer`
const websiteId = `${SITE_URL}/#website`

/** WebSite + AutoDealer graph for Google (local business + sitewide entity) */
export function JsonLd() {
  const sameAs = [site.social.facebook, site.social.instagram].filter(Boolean)
  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_HOME_URL,
        name: site.name,
        description: LOCAL_BUSINESS_SEO_DESCRIPTION,
        inLanguage: 'en-IN',
        publisher: { '@id': dealerId },
      },
      {
        '@type': 'AutoDealer',
        '@id': dealerId,
        name: site.name,
        alternateName: [
          'KS Tractors',
          'KS Tractors Jangaon',
          'Mahindra KS Tractors Jangaon',
          'KS Tractors and Implements',
        ],
        description: LOCAL_BUSINESS_SEO_DESCRIPTION,
        url: SITE_HOME_URL,
        image: `${SITE_URL}/favicon.svg`,
        ...(site.phoneTel ? { telephone: site.phoneTel } : {}),
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.addressLines[0],
          addressLocality: 'Jangaon',
          addressRegion: 'Telangana',
          postalCode: '506167',
          addressCountry: 'IN',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00',
        },
        priceRange: '$$',
        sameAs,
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
