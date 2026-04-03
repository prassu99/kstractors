import { galleryItems } from '../data/gallery'

export function Gallery() {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Gallery</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        On the lot, in the field, in the shop
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-base-content/70">
        A few snapshots from deliveries, demos, and daily life at the dealership. Replace these with
        your own photography anytime.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <li key={item.id}>
            <figure className="card card-compact overflow-hidden border border-base-300 bg-base-100 shadow-md transition hover:shadow-lg">
              <img
                src={item.src}
                alt=""
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
                width={600}
                height={400}
              />
              <figcaption className="card-body gap-1 p-4">
                <strong className="text-base text-base-content">{item.title}</strong>
                <span className="text-sm text-base-content/65">{item.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
