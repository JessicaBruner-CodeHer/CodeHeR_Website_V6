export default function SectionContainer({ id, children, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={`
        py-20 lg:py-24
        ${dark
          ? 'bg-[var(--color-bg-main)] text-[var(--color-text-light)]'
          : 'bg-[var(--color-surface-white)]'
        }
        ${className}
      `}
    >
      <div className="site-container">
        {children}
      </div>
    </section>
  )
}
