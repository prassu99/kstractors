import { GallerySlideshow } from '../components/GallerySlideshow'
import { Seo } from '../components/Seo'
import { TITLE_SUFFIX } from '../config/seo'
import { site } from '../config/site'

export function Gallery() {
  return (
    <div>
      <Seo
        title={`Tractor Showroom & Dealership Photos | ${TITLE_SUFFIX}`}
        description="Mahindra tractor showroom and dealership photos — KS Tractors Jangaon. See our yard and team; follow Facebook for new stock and offers in Telangana."
        path="/gallery"
      />
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        Gallery
      </h1>
      <p className="mb-2 max-w-2xl text-base-content/80">
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary font-semibold"
        >
          {site.facebookPageTitle}
        </a>
      </p>

      <GallerySlideshow />
    </div>
  )
}
