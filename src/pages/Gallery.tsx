import { site } from '../config/site'
import { GallerySlideshow } from '../components/GallerySlideshow'

export function Gallery() {
  return (
    <div>
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
