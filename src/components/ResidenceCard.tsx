import { Link } from 'react-router-dom'
import { distanceFrom, formatPrice, nsfasLabel, type Residence } from '../data/residences'

export function ResidenceCard({ residence, campus }: { residence: Residence; campus: string }) {
  const distance = distanceFrom(residence, campus)

  return (
    <article className="overflow-hidden rounded-md border border-ink/10 bg-paper">
      <div className="relative aspect-[4/3]">
        <img src={residence.image} alt={residence.name} className="h-full w-full object-cover" />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            residence.nsfas === 'private' ? 'bg-ink text-cream' : 'bg-terra text-cream'
          }`}
        >
          {nsfasLabel(residence.nsfas)}
        </span>
        {residence.popular ? (
          <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-medium text-ink">
            Popular
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight">{residence.name}</h3>
          <span className="whitespace-nowrap font-display text-lg font-semibold text-terra">
            {formatPrice(residence.pricePerMonth)}
          </span>
        </div>
        {distance ? (
          <p className="mt-2 text-sm text-ink/60">
            {residence.suburb} · {distance.km.toFixed(1)} km to {campus} · {distance.walkMin} min walk
          </p>
        ) : null}
        <div className="mt-4 grid grid-cols-3 gap-2 border-y border-ink/10 py-3 text-center">
          <div>
            <p className="text-xs text-ink/45">Beds</p>
            <p className="text-sm font-medium">{residence.beds}</p>
          </div>
          <div>
            <p className="text-xs text-ink/45">Rooms</p>
            <p className="text-sm font-medium">{residence.roomType}</p>
          </div>
          <div>
            <p className="text-xs text-ink/45">Catering</p>
            <p className="text-sm font-medium">{residence.catering === 'full' ? 'Full' : 'Self'}</p>
          </div>
        </div>
        <Link
          to={`/residence/${residence.slug}`}
          className="mt-4 block w-full rounded-sm border border-ink/20 py-2.5 text-center text-sm font-medium transition-colors hover:bg-ink hover:text-cream"
        >
          View application
        </Link>
      </div>
    </article>
  )
}
