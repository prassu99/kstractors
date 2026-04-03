import { Link } from 'react-router-dom'
import { site, whatsappUrl } from '../config/site'
import { SocialIcons } from '../components/SocialIcons'

export function Home() {
  return (
    <>
      <section className="mb-12 grid items-center gap-10 lg:mb-16 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Authorized dealership
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-base-content md:text-5xl">
            Tractors, implements, and support you can rely on
          </h1>
          <p className="mb-6 text-lg text-base-content/70">
            From compact vineyard units to high-horsepower field tractors, we help you choose the
            right machine and keep it running with factory-trained service and genuine parts.
          </p>
          <div className="mb-6 flex flex-wrap gap-3">
            <Link to="/models" className="btn btn-primary">
              Browse models
            </Link>
            <Link to="/contact" className="btn btn-outline btn-primary">
              Contact us
            </Link>
            <a
              href={whatsappUrl(
                `Hi ${site.name}, I'd like to speak with sales about a new or used tractor.`,
              )}
              className="btn border-0 bg-[#128c7e] text-white hover:bg-[#0f7569]"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-base-content/60">Connect</span>
            <SocialIcons />
          </div>
        </div>
        <div
          className="overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-xl"
          aria-hidden
        >
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80"
            alt=""
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="card border border-base-300 bg-base-100 shadow-md transition hover:shadow-lg">
          <div className="card-body p-6">
            <h2 className="card-title text-lg text-base-content">New &amp; used inventory</h2>
            <p className="text-base-content/70">
              Compare horsepower ranges, transmissions, and loader packages with guidance from our
              product specialists.
            </p>
            <div className="card-actions mt-2 justify-start">
              <Link to="/models" className="btn btn-link btn-primary px-0 font-semibold no-underline">
                View tractor lineup →
              </Link>
            </div>
          </div>
        </article>
        <article className="card border border-base-300 bg-base-100 shadow-md transition hover:shadow-lg">
          <div className="card-body p-6">
            <h2 className="card-title text-lg text-base-content">Service &amp; diagnostics</h2>
            <p className="text-base-content/70">
              Seasonal inspections, warranty work, hydraulics, and engine care—book a bay or ask
              about field service where available.
            </p>
            <div className="card-actions mt-2 justify-start">
              <Link
                to="/service-parts"
                className="btn btn-link btn-primary px-0 font-semibold no-underline"
              >
                Service details →
              </Link>
            </div>
          </div>
        </article>
        <article className="card border border-base-300 bg-base-100 shadow-md transition hover:shadow-lg">
          <div className="card-body p-6">
            <h2 className="card-title text-lg text-base-content">Genuine parts</h2>
            <p className="text-base-content/70">
              Filters, belts, batteries, and wear parts in stock. Call ahead or message us with your
              model and serial number.
            </p>
            <div className="card-actions mt-2 justify-start">
              <Link
                to="/service-parts#parts"
                className="btn btn-link btn-primary px-0 font-semibold no-underline"
              >
                Parts counter →
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
