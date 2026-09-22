import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResidenceCard } from '../components/ResidenceCard'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { distanceFrom, residences, universities, type UniversityId } from '../data/residences'

interface Filters {
  nsfas: boolean
  within3km: boolean
  single: boolean
  selfCatering: boolean
}

const initialFilters: Filters = {
  nsfas: true,
  within3km: false,
  single: false,
  selfCatering: false,
}

const refineOptions: { key: keyof Filters; label: string }[] = [
  { key: 'nsfas', label: 'NSFAS rated' },
  { key: 'within3km', label: 'Within 3 km' },
  { key: 'single', label: 'Single room' },
  { key: 'selfCatering', label: 'Self-catering' },
]

export default function Home() {
  const [universityId, setUniversityId] = useState<UniversityId>('wits')
  const university = universities.find((item) => item.id === universityId)!
  const [campus, setCampus] = useState(university.campuses[0])
  const [filters, setFilters] = useState<Filters>(initialFilters)

  const results = useMemo(
    () =>
      residences
        .filter((residence) => residence.university === universityId)
        .filter((residence) => !filters.nsfas || residence.nsfas !== 'private')
        .filter((residence) => !filters.single || residence.roomType === 'Single')
        .filter((residence) => !filters.selfCatering || residence.catering === 'self')
        .filter((residence) => {
          if (!filters.within3km) return true
          const distance = distanceFrom(residence, campus)
          return distance !== undefined && distance.km <= 3
        })
        .sort((a, b) => (distanceFrom(a, campus)?.km ?? 0) - (distanceFrom(b, campus)?.km ?? 0)),
    [universityId, campus, filters],
  )

  const scrollToResults = () => {
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleUniversityChange = (id: UniversityId) => {
    setUniversityId(id)
    const next = universities.find((item) => item.id === id)!
    setCampus(next.campuses[0])
  }

  return (
    <div className="min-h-screen">
      <SiteHeader>
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#results"
              onClick={(event) => {
                event.preventDefault()
                scrollToResults()
              }}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              Find residences
            </a>
            <a
              href="#results"
              onClick={(event) => {
                event.preventDefault()
                setFilters((current) => ({ ...current, nsfas: true }))
                scrollToResults()
              }}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              NSFAS rated
            </a>
            <Link to="/how-it-works" className="text-sm text-ink/70 transition-colors hover:text-ink">
              How it works
            </Link>
          </nav>
          <a
            href="#results"
            onClick={(event) => {
              event.preventDefault()
              scrollToResults()
            }}
            className="rounded-sm bg-terra px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-terra/90"
          >
            Get started
          </a>
        </div>
      </SiteHeader>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid gap-10 pt-14 pb-10 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-terra">
              Student accommodation, decoded
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Find the residence that
              <br />
              <span className="italic font-normal text-sage">actually fits</span> your campus.
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/60">
              Pick your university and we'll surface accredited student residences, flag the NSFAS-rated ones, and
              show exactly how far each is from your faculty.
            </p>
          </div>
          <form
            className="w-full rounded-md border border-ink/10 bg-paper p-5 shadow-sm md:ml-auto md:max-w-md"
            onSubmit={(event) => {
              event.preventDefault()
              scrollToResults()
            }}
          >
            <label
              htmlFor="university"
              className="block text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50"
            >
              I study at
            </label>
            <select
              id="university"
              value={universityId}
              onChange={(event) => handleUniversityChange(event.target.value as UniversityId)}
              className="mt-2 w-full appearance-none rounded-sm border border-ink/15 bg-cream/40 px-4 py-3 font-medium text-ink outline-none transition-colors focus:border-sage"
            >
              {universities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label htmlFor="campus" className="mt-3 block text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">
              Measure distance from
            </label>
            <select
              id="campus"
              value={campus}
              onChange={(event) => setCampus(event.target.value)}
              className="mt-2 w-full appearance-none rounded-sm border border-ink/15 bg-cream/40 px-4 py-3 font-medium text-ink outline-none transition-colors focus:border-sage"
            >
              {university.campuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-5 w-full rounded-sm bg-ink py-3 text-sm font-medium text-cream transition-colors hover:bg-ink/90"
            >
              Show accredited residences
            </button>
          </form>
        </section>

        <section id="results" className="scroll-mt-8">
          <div className="flex flex-wrap items-center gap-2 border-y border-ink/15 py-5">
            <span className="mr-1 text-xs font-medium uppercase tracking-[0.2em] text-ink/40">Refine</span>
            {refineOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setFilters((current) => ({ ...current, [option.key]: !current[option.key] }))}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  filters[option.key]
                    ? 'border-terra/30 bg-terra/15 text-terra'
                    : 'border-ink/15 text-ink/70 hover:border-ink/30 hover:text-ink'
                }`}
              >
                {option.label}
              </button>
            ))}
            <span className="ml-auto text-sm text-ink/50">
              {results.length} residences near {university.short}
            </span>
          </div>

          {results.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {results.map((residence) => (
                <ResidenceCard key={residence.slug} residence={residence} campus={campus} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-sm text-ink/60">
              No residences match those filters yet. Try removing one.
            </p>
          )}
        </section>
      </main>

      <SiteFooter note="Wits · UJ · UP · UKZN" />
    </div>
  )
}
