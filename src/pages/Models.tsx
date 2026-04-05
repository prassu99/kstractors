import { Seo } from '../components/Seo'
import { WhatsAppPageFooter } from '../components/WhatsAppPageFooter'
import { TITLE_SUFFIX } from '../config/seo'
import { mahindraIndia } from '../config/mahindra'
import { tractorModels } from '../data/models'

export function Models() {
  return (
    <div>
      <Seo
        title={`Mahindra Tractor Models in Jangaon | ${TITLE_SUFFIX}`}
        description="Mahindra tractors in Jangaon: explore the lineup at KS Tractors — specs, compare models, and enquire on MahindraTractor.com. Your authorized tractor dealer on Suryapet Road."
        path="/models"
      />
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        TRACTORS
      </h1>
      <p className="mb-10 max-w-2xl text-base-content/80">
        <a
          href={mahindraIndia.website}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary font-semibold"
        >
          MahindraTractor.com
        </a>
        {' · '}
        <a
          href={mahindraIndia.compareTractors}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary font-semibold"
        >
          Compare tractors
        </a>
        {' · '}
        <a
          href={mahindraIndia.enquirePrice}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary font-semibold"
        >
          Enquire / Get price
        </a>
      </p>
      <ul className="flex flex-col gap-8">
        {tractorModels.map((m) => (
          <li key={m.id}>
            <article className="card card-side flex-col overflow-hidden border border-base-300 bg-base-200 shadow-lg lg:flex-row">
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
                <div className="card-actions mt-2 justify-start">
                  <a
                    href={m.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View on MahindraTractor.com ↗
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <WhatsAppPageFooter />
    </div>
  )
}
