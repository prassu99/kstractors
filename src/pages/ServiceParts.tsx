import { Seo } from '../components/Seo'
import { WhatsAppPageFooter } from '../components/WhatsAppPageFooter'
import { TITLE_SUFFIX } from '../config/seo'
import { mahindraIndia } from '../config/mahindra'
import { mahindraOfficialCopy as c } from '../content/mahindraOfficialCopy'

export function ServiceParts() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <Seo
        title={`Tractor Service & Implements | ${TITLE_SUFFIX}`}
        description="Mahindra tractor service and genuine implements near Jangaon. KS Tractors dealership connects you to the national service network and official implements hub on MahindraTractor.com."
        path="/service-parts"
      />
      <h1 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        Service &amp; implements
      </h1>

      <section className="space-y-4" id="service" aria-labelledby="svc-h">
        <h2 id="svc-h" className="text-xl font-bold text-white">
          Service centres near me
        </h2>
        <p className="leading-relaxed text-base-content/85">{c.serviceNetwork}</p>
        <p>
          <a
            href={mahindraIndia.services}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Product service — MahindraTractor.com ↗
          </a>
        </p>
      </section>

      <section className="space-y-4" id="parts" aria-labelledby="imp-h">
        <h2 id="imp-h" className="text-xl font-bold text-white">
          Tractor implements
        </h2>
        <p className="leading-relaxed text-base-content/85">{c.implements}</p>
        <p>
          <a
            href={mahindraIndia.implementsHub}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm"
          >
            Implements — MahindraTractor.com ↗
          </a>
        </p>
      </section>

      <p className="text-xs leading-relaxed text-base-content/55">{c.disclaimer}</p>
      <WhatsAppPageFooter />
    </div>
  )
}
