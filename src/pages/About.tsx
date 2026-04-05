import { Seo } from '../components/Seo'
import { WhatsAppPageFooter } from '../components/WhatsAppPageFooter'
import { TITLE_SUFFIX } from '../config/seo'
import { mahindraOfficialCopy as c } from '../content/mahindraOfficialCopy'

export function About() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Seo
        title={`About Mahindra Tractors | ${TITLE_SUFFIX}`}
        description="Mahindra — India’s tractor brand. KS Tractors Jangaon is your authorized Mahindra tractor dealership; read the official story and why buyers choose Mahindra in Telangana."
        path="/about"
      />
      <h1 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        About Mahindra Tractors
      </h1>
      <div className="space-y-4 text-base leading-relaxed text-base-content/90">
        <p>{c.aboutMahindra}</p>
        <p>{c.toughHardum}</p>
      </div>
      <p className="border-t border-base-300 pt-6 text-xs leading-relaxed text-base-content/55">
        {c.disclaimer}
      </p>
      <WhatsAppPageFooter />
    </article>
  )
}
