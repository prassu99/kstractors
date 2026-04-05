import { Seo } from '../components/Seo'
import { WhatsAppCta } from '../components/WhatsAppCta'
import { TITLE_SUFFIX } from '../config/seo'
import { site } from '../config/site'
import { SocialIcons } from '../components/SocialIcons'

export function Contact() {
  return (
    <>
      <Seo
        title={`Contact Tractor Dealership Jangaon | ${TITLE_SUFFIX}`}
        description="Visit our Mahindra tractor showroom in Jangaon or WhatsApp KS Tractors. Tractor dealership on Suryapet Road — directions, hours Mon–Sat, email and social links."
        path="/contact"
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
            Contact
          </h1>
          <div className="space-y-2 text-base-content/85">
            <p>
              <a href={`tel:${site.phoneTel}`} className="link link-primary font-medium">
                {site.phoneDisplay}
              </a>
              <span className="text-base-content/50"> · Call or WhatsApp</span>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="link link-primary font-medium">
                {site.email}
              </a>
            </p>
            <p>{site.addressLines.join(', ')}</p>
            <p>{site.hours}</p>
          </div>
          <p className="mb-2 mt-8 text-xs font-bold uppercase tracking-wider text-base-content/50">
            Contact us on social media
          </p>
          <SocialIcons />
        </div>

        <div className="card border border-base-300 bg-base-200 p-6 shadow-xl md:p-8">
          <h2 className="mb-2 text-xl font-bold text-base-content">WhatsApp</h2>
          <p className="mb-6 text-sm leading-relaxed text-base-content/75">
            Tap below to open WhatsApp and start a chat with our business account — no need to forward or share
            with someone else; you&apos;ll message us directly.
          </p>
          <WhatsAppCta variant="card" label="Chat on WhatsApp" />
          <p className="mt-4 text-center text-xs text-base-content/50">{site.phoneDisplay}</p>
        </div>
      </div>
    </>
  )
}
