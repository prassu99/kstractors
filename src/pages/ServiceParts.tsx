import { Link } from 'react-router-dom'
import { site, whatsappUrl } from '../config/site'

export function ServiceParts() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Service &amp; parts
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
          Keep every season on schedule
        </h1>
        <p className="text-lg text-base-content/70">
          Factory-trained technicians, modern diagnostics, and a parts department stocked with the
          consumables you need most—so you spend less time waiting and more time in the field.
        </p>
      </div>

      <section className="space-y-4" aria-labelledby="svc-heading">
        <h2 id="svc-heading" className="text-xl font-bold text-base-content">
          Service department
        </h2>
        <ul className="list-inside list-disc space-y-2 text-base-content/80">
          <li>Scheduled maintenance, fluid analysis, and seasonal inspections</li>
          <li>Hydraulic and electrical troubleshooting, cab HVAC, and precision-ready setups</li>
          <li>Warranty administration and documented repair history for resale value</li>
        </ul>
        <p className="leading-relaxed text-base-content/80">
          Book by phone at{' '}
          <a href={`tel:${site.phoneTel}`} className="link link-primary font-semibold">
            {site.phoneDisplay}
          </a>{' '}
          or <Link to="/contact" className="link link-primary font-semibold">send a WhatsApp lead</Link>{' '}
          with your unit model and serial number.
        </p>
        <a
          href={whatsappUrl(
            `Hi, I'd like to schedule service. Model/serial: (please fill in). Preferred dates: `,
          )}
          className="btn inline-flex border-0 bg-[#128c7e] text-white hover:bg-[#0f7569]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book service via WhatsApp
        </a>
      </section>

      <section className="space-y-4" id="parts" aria-labelledby="parts-heading">
        <h2 id="parts-heading" className="text-xl font-bold text-base-content">
          Parts counter
        </h2>
        <p className="leading-relaxed text-base-content/80">
          We stock filters, belts, batteries, lighting, and wear items for the lines we represent.
          For specialty orders, most parts arrive quickly from regional distribution.
        </p>
        <ul className="list-inside list-disc space-y-2 text-base-content/80">
          <li>Bring your model and serial number for a perfect fit</li>
          <li>Will-call pickup or arrange shipping for remote customers</li>
        </ul>
        <a
          href={whatsappUrl(
            `Parts request: model, serial, and part needed (photo of tag helps). Thanks!`,
          )}
          className="btn btn-outline btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message parts desk on WhatsApp
        </a>
      </section>
    </div>
  )
}
