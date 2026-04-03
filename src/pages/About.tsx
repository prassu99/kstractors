import { site } from '../config/site'

export function About() {
  return (
    <article className="mx-auto max-w-3xl space-y-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About us</p>
      <h1 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        Rooted in the community we serve
      </h1>
      <p className="text-lg text-base-content/70">
        {site.name} is a full-line tractor dealership focused on honest recommendations, fair
        pricing, and long-term support after the sale.
      </p>
      <p className="leading-relaxed text-base-content/80">
        Our team includes sales consultants who grew up around equipment, certified technicians
        with ongoing factory training, and parts staff who understand downtime costs money. Whether
        you are upgrading a single unit or outfitting a growing operation, we take time to match
        horsepower, hydraulics, and features to your soil, crops, and workload.
      </p>
      <h2 className="pt-4 text-xl font-bold text-base-content">What we stand for</h2>
      <ul className="list-inside list-disc space-y-2 text-base-content/80">
        <li>Transparent quotes and financing options explained in plain language</li>
        <li>Pre-delivery inspection and operator orientation on every new machine</li>
        <li>Priority support during planting and harvest windows</li>
        <li>Local events, demo days, and grower clinics throughout the year</li>
      </ul>
      <p className="leading-relaxed text-base-content/80">
        Visit our showroom, call {site.phoneDisplay}, or reach out on WhatsApp—we are here to help
        you move forward with confidence.
      </p>
    </article>
  )
}
