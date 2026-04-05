import homeHero from '../assets/home.png'
import { MahindraOfficialSections } from '../components/MahindraOfficialSections'
import { Seo } from '../components/Seo'
import { WhatsAppCta } from '../components/WhatsAppCta'
import { mahindraIndia } from '../config/mahindra'
import { defaultMeta } from '../config/seo'
import { site } from '../config/site'

export function Home() {
  return (
    <>
      <Seo title={defaultMeta.title} description={defaultMeta.description} path="/" />
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-base-content md:text-4xl">
          {site.facebookPageTitle}
        </h1>
        <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-base-content/70">
          Looking for tractors, a tractor showroom, or a Mahindra tractor dealership in Jangaon? KS Tractors and
          Implements is your authorized Mahindra dealer on Suryapet Road — new tractors, service, and genuine parts
          for Jangaon and nearby areas.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppCta variant="hero" label="Chat on WhatsApp" />
          <span className="hidden text-base-content/35 sm:inline" aria-hidden>
            ·
          </span>
          <p className="mb-0 text-center text-sm text-base-content/60 sm:text-left">
            Models, implements &amp; prices:{' '}
            <a
              href={mahindraIndia.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary font-semibold"
            >
              MahindraTractor.com
            </a>
          </p>
        </div>
      </div>

      <MahindraOfficialSections heroSrc={homeHero} />
    </>
  )
}
