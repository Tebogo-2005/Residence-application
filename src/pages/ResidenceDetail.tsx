import { Link, Navigate, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import {
  cateringLabel,
  formatPrice,
  getUniversity,
  nsfasLabel,
  residences,
  roomTypeLabel,
} from '../data/residences'

export default function ResidenceDetail() {
  const { slug } = useParams()
  const residence = residences.find((item) => item.slug === slug)

  if (!residence) {
    return <Navigate to="/" replace />
  }

  const university = getUniversity(residence.university)

  return (
    <div className="min-h-screen">
      <SiteHeader>
        <Link to="/#results" className="text-sm text-ink/70 transition-colors hover:text-ink">
          Back to results
        </Link>
      </SiteHeader>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:py-14">
        <div className="md:grid md:grid-cols-[minmax(0,1fr)_310px] md:gap-10">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-terra">
              {nsfasLabel(residence.nsfas)} · {university.short}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              {residence.name}
            </h1>
            <p className="mt-3 text-base text-ink/70">
              {residence.suburb}, {residence.city} · {formatPrice(residence.pricePerMonth)} per month ·{' '}
              {roomTypeLabel(residence.roomType)} · {cateringLabel(residence.catering)}
            </p>

            <img
              src={residence.image}
              alt={residence.name}
              className="mt-8 aspect-[16/10] w-full rounded-md object-cover"
            />

            <h2 className="mt-10 font-display text-2xl font-semibold md:text-3xl">Distance from each campus</h2>
            <div className="mt-4 divide-y divide-ink/10 rounded-md border border-ink/10 bg-paper">
              {residence.distances.map((distance) => (
                <div key={distance.campus} className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <span>{distance.campus}</span>
                  <span className="text-ink/60">
                    {distance.km.toFixed(1)} km · {distance.walkMin} min walk
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold md:text-3xl">Amenities</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {residence.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink/80"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <aside className="mt-10 md:mt-0">
            <div className="rounded-md border border-ink/10 bg-paper p-5 shadow-sm md:sticky md:top-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">What to apply for</p>
              <p className="mt-1.5 text-sm font-medium">{residence.portal}</p>
              <ol className="mt-4 space-y-3">
                {residence.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="font-display text-sm text-terra">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-relaxed text-ink/80">{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
                Documents checklist
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80 marker:text-ink/40">
                {residence.documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>

              <p className="mt-6 border-t border-ink/10 pt-4 text-sm text-ink/60">
                Applications close <span className="font-medium text-ink">{residence.closes}</span>
              </p>
              <Link
                to="/#results"
                className="mt-4 block w-full rounded-sm bg-ink py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-ink/90"
              >
                Compare other residences
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter note="Confirm details with your university" />
    </div>
  )
}
