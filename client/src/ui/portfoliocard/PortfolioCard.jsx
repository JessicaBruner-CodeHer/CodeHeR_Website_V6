import { ExternalLink, ImageOff } from 'lucide-react'

const TAG_COLORS = {
  'New build':   'bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)]',
  'Rebuild':     'bg-[var(--color-accent)]/10  text-[var(--color-accent-dark)]',
  'E-commerce':  'bg-[var(--color-bg-main)]/10 text-[var(--color-text-body)]',
}

export default function PortfolioCard({ title, tags = [], url, image, description }) {
  const hasImage = Boolean(image)
  const hasUrl   = Boolean(url)

  return (
    <div className="
      group flex flex-col rounded-[var(--radius-lg)] overflow-hidden
      border border-[var(--color-border-light)]
      bg-[var(--color-surface-white)]
      shadow-[var(--shadow-card)]
      transition-all duration-[var(--transition-base)]
      hover:shadow-[var(--shadow-lg)] hover:-translate-y-1
    ">
      {/* Thumbnail */}
      <div className="
        relative w-full aspect-video
        bg-[var(--color-surface-muted)]
        overflow-hidden
      ">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <ImageOff size={28} className="text-[var(--color-border-medium)]" />
            <span className="text-xs text-[var(--color-text-muted)]">Coming soon</span>
          </div>
        )}

        {/* Hover overlay with link */}
        {hasUrl && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title}`}
            className="
              absolute inset-0 flex items-center justify-center
              bg-[var(--color-bg-main)]/70
              opacity-0 group-hover:opacity-100
              transition-opacity duration-[var(--transition-base)]
            "
          >
            <span className="
              flex items-center gap-2 px-4 py-2
              bg-[var(--color-primary)] text-[var(--color-bg-main)]
              rounded-[var(--radius-md)] text-sm font-medium
            ">
              <ExternalLink size={14} />
              View site
            </span>
          </a>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-4" style={{ padding: '1.75rem' }}>

        <h3 className="font-heading text-lg font-semibold text-[var(--color-text-strong)]">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
            {description}
          </p>
        )}

        {/* Footer link */}
        {hasUrl ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-auto inline-flex items-center gap-1.5
              text-sm font-medium text-[var(--color-primary)]
              hover:text-[var(--color-primary-dark)]
              transition-colors duration-[var(--transition-fast)]
            "
          >
            View site <ExternalLink size={13} />
          </a>
        ) : null}
      </div>
    </div>
  )
}
