export default function PageLoader() {
  return (
    <div className="
      min-h-[60vh] flex items-center justify-center
      bg-[var(--color-surface-white)]
    ">
      <div className="flex flex-col items-center gap-4">
        <div className="
          w-10 h-10 rounded-full
          border-2 border-[var(--color-border-light)]
          border-t-[var(--color-primary)]
          animate-spin
        " />
        <p className="text-sm text-[var(--color-text-muted)] font-medium tracking-wide">
          Loading…
        </p>
      </div>
    </div>
  )
}
