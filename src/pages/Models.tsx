import { whatsappUrl } from '../config/site'
import { tractorModels } from '../data/models'

export function Models() {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        Tractor models
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        Lineup overview
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-base-content/70">
        Representative models for demo purposes—swap specs, imagery, and SKUs to match your
        franchise or inventory.
      </p>
      <ul className="flex flex-col gap-8">
        {tractorModels.map((m) => (
          <li key={m.id}>
            <article className="card card-side flex-col overflow-hidden border border-base-300 bg-base-100 shadow-lg lg:flex-row">
              <figure className="aspect-video w-full bg-base-200 lg:aspect-auto lg:max-w-sm lg:shrink-0">
                <img
                  src={m.image}
                  alt=""
                  className="h-full min-h-[200px] w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body justify-center p-6 lg:p-8">
                <h2 className="card-title text-2xl text-base-content">{m.name}</h2>
                <p className="font-bold text-primary">{m.hp}</p>
                <p className="text-base-content/70">{m.use}</p>
                <ul className="list-inside list-disc text-base-content/75">
                  {m.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="card-actions mt-2 justify-start">
                  <a
                    href={whatsappUrl(
                      `Hi, I'm interested in the ${m.name} (${m.hp}). Please share availability and pricing.`,
                    )}
                    className="btn btn-sm border-0 bg-[#128c7e] text-white hover:bg-[#0f7569]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request quote on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
