import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'

const steps = [
  {
    title: 'Choose your university and campus',
    body: 'Distances are measured from the campus you actually attend, not a general city centre.',
  },
  {
    title: 'See only accredited residences',
    body: 'Every listing is accredited by the university, so your application will be accepted.',
  },
  {
    title: 'Check the NSFAS rating',
    body: 'NSFAS rated means the residence is approved for funding. NSFAS capped means the allowance covers part of the rent. Private lease means you pay yourself.',
  },
  {
    title: 'Apply with the right documents',
    body: 'Each residence page lists the portal, the steps, the closing date and the documents you need.',
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <SiteHeader>
        <Link to="/#results" className="text-sm text-ink/70 transition-colors hover:text-ink">
          Find residences
        </Link>
      </SiteHeader>

      <main className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-terra">How it works</p>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          Four steps between you and a <span className="italic font-normal text-sage">bed.</span>
        </h1>

        <div className="mt-10 divide-y divide-ink/10 rounded-md border border-ink/10 bg-paper shadow-sm">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-5 px-6 py-6">
              <span className="font-display text-base text-terra">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="font-display text-xl font-semibold leading-tight md:text-2xl">{step.title}</h2>
                <p className="mt-1.5 text-base text-ink/60">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/#results"
          className="mt-10 inline-block rounded-sm bg-terra px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terra/90"
        >
          Find my residence
        </Link>
      </main>
    </div>
  )
}
