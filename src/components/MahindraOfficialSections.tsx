import { mahindraIndia } from '../config/mahindra'
import { mahindraOfficialCopy as c } from '../content/mahindraOfficialCopy'

type Props = {
  /** Local hero image; falls back to Mahindra site asset when omitted */
  heroSrc?: string
}

export function MahindraOfficialSections({ heroSrc }: Props) {
  const hero = heroSrc ?? mahindraIndia.heroHomepage

  return (
    <section className="mb-12 space-y-10 rounded-2xl border border-base-300 bg-base-200/90 p-0 shadow-inner md:p-0">
      <div className="flex justify-center overflow-hidden rounded-t-2xl border-b border-base-300 bg-base-300/50">
        <img
          src={hero}
          alt=""
          className="mx-auto block h-auto w-full max-h-[min(75vh,720px)] object-contain object-center"
          width={1200}
          height={514}
          decoding="async"
        />
      </div>

      <div className="space-y-10 px-6 pb-10 pt-8 md:px-10">
        <div className="border-b border-base-300 pb-8 text-center">
          <h2 className="font-black uppercase tracking-tight text-white">
            <span className="block text-2xl md:text-4xl">{c.brandLockup[0]}</span>
            <span className="mt-1 block text-xl font-bold text-primary md:text-3xl">
              {c.brandLockup[1]}
            </span>
            <span className="block text-xl font-bold text-primary md:text-3xl">
              {c.brandLockup[2]}
            </span>
          </h2>
          <p className="mt-6 text-lg font-semibold text-base-content md:text-xl">
            {c.futureFarming}
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-bold leading-snug text-white md:text-3xl">
            {c.driveExcellenceTitle}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-base-300 bg-base-100/40 p-4 text-left"
              >
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary">
                  {p.title}
                </p>
                <p className="text-sm leading-relaxed text-base-content/85">{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center">
            <a
              href={mahindraIndia.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm md:btn-md"
            >
              Know more on MahindraTractor.com ↗
            </a>
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-base-content/90 md:text-base">
          <h3 className="text-xl font-bold text-white">About Mahindra Tractors</h3>
          <p>{c.aboutMahindra}</p>
          <p>{c.toughHardum}</p>
        </div>

        <div className="space-y-3">
          <DetailsBlock title="Tractor categories" body={c.tractorCategories} />
          <DetailsBlock title="Tractor implements" body={c.implements} />
          <DetailsBlock title="Compare tractors" body={c.compareTractors} />
          <DetailsBlock title="Tractor prices" body={c.pricing} />
          <DetailsBlock title="Showroom near me" body={c.showroomNetwork} />
          <DetailsBlock title="Service centres near me" body={c.serviceNetwork} />
        </div>

        <p className="border-t border-base-300 pt-6 text-xs leading-relaxed text-base-content/55">
          {c.disclaimer}
        </p>
      </div>
    </section>
  )
}

function DetailsBlock({ title, body }: { title: string; body: string }) {
  return (
    <details className="group rounded-xl border border-base-300 bg-base-100/30 open:bg-base-100/50">
      <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-2">
          {title}
          <span className="text-primary transition group-open:rotate-180">▼</span>
        </span>
      </summary>
      <div className="border-t border-base-300 px-4 pb-4 pt-3 text-sm leading-relaxed text-base-content/85">
        {body}
      </div>
    </details>
  )
}
