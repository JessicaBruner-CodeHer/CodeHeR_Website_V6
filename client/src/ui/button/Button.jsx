import { Link } from 'react-router-dom'

/**
 * Button / CTA component
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 * as:      'button' | 'link' (internal) | 'a' (external)
 */
export default function Button({
  children,
  variant = 'primary',
  size    = 'md',
  href    = null,
  onClick = null,
  disabled = false,
  type    = 'button',
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium rounded-[var(--radius-md)]
    transition-all duration-[var(--transition-base)]
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer select-none whitespace-nowrap
  `

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  const variants = {
    primary:  `
      bg-[var(--color-primary)] text-[var(--color-bg-main)]
      hover:bg-[var(--color-primary-light)]
      focus-visible:outline-[var(--color-primary)]
      shadow-[var(--shadow-sm)]
    `,
    secondary: `
      bg-[var(--color-accent)] text-white
      hover:bg-[var(--color-accent-light)]
      focus-visible:outline-[var(--color-accent)]
      shadow-[var(--shadow-sm)]
    `,
    outline: `
      bg-transparent border border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-main)]
      focus-visible:outline-[var(--color-primary)]
    `,
    ghost: `
      bg-transparent text-[var(--color-primary)]
      hover:bg-[var(--color-surface-muted)]
      focus-visible:outline-[var(--color-primary)]
    `,
    light: `
      bg-white text-[var(--color-bg-main)]
      hover:bg-[var(--color-surface-cream)]
      focus-visible:outline-white
      shadow-[var(--shadow-sm)]
    `,
  }

  const classes = `${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${className}`

  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
