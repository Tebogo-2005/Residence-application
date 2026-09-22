export function SiteFooter({ note }: { note: string }) {
  return (
    <footer className="mt-14 border-t border-ink/10 bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <p className="text-sm text-ink/80">Meridian — where students find their place.</p>
        <p className="text-right text-[11px] uppercase tracking-[0.2em] text-ink/45">{note}</p>
      </div>
    </footer>
  )
}
