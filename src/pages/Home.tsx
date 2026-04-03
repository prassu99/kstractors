import homeHero from '../assets/home.png'
import { mahindraIndia } from '../config/mahindra'
import { site } from '../config/site'
import { MahindraOfficialSections } from '../components/MahindraOfficialSections'

export function Home() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-base-content md:text-4xl">
          {site.facebookPageTitle}
        </h1>
        <p className="text-sm text-base-content/60">
          Tractors, implements, models &amp; prices:{' '}
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

      <MahindraOfficialSections heroSrc={homeHero} />
    </>
  )
}
