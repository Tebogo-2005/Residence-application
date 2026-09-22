import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function SiteHeader({ children }: { children?: ReactNode }) {
  return (
    <header className="border-b border-ink/10 bg-paper/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-sm bg-ink font-display text-lg text-cream">
            M
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg font-semibold leading-none tracking-tight">Meridian</span>
            <span className="mt-1 text-[10px] uppercase leading-none tracking-[0.22em] text-sage">
              Residence Finder
            </span>
          </span>
        </Link>
        {children}
      </div>
    </header>
  )
}
