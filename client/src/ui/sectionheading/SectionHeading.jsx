export default function SectionHeading({
  eyebrow,
  headline,
  subtext,
  align   = 'left',
  light   = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`
          text-sm font-medium tracking-widest uppercase mb-3
          ${light ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-primary)]'}
        `}>
          {eyebrow}
        </p>
      )}
      {headline && (
        <h2 className={`
          font-heading text-4xl md:text-5xl font-semibold leading-tight mb-4
          ${light ? 'text-[var(--color-text-light)]' : 'text-[var(--color-text-strong)]'}
        `}>
          {headline}
        </h2>
      )}
      {subtext && (
        <p className={`
          text-lg leading-relaxed
          ${light ? 'text-[var(--color-text-faint)]' : 'text-[var(--color-text-muted)]'}
        `}>
          {subtext}
        </p>
      )}
    </div>
  )
}
