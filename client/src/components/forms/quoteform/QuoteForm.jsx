import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { quoteFormContent as c } from '@/assets/constants/siteContent'
import Button from '@/ui/button/Button'

const FIELD_CLASS = `
  w-full px-4 py-3 rounded-[var(--radius-md)]
  bg-[var(--color-surface-muted)]
  border border-[var(--color-border-light)]
  text-[var(--color-text-body)] text-base
  placeholder:text-[var(--color-text-muted)]
  focus:outline-none focus:border-[var(--color-primary)]
  focus:ring-2 focus:ring-[var(--color-primary)]/20
  transition-colors duration-[var(--transition-fast)]
`

const LABEL_CLASS = `
  block text-xs font-semibold tracking-widest uppercase
  text-[var(--color-text-body)] mb-2
`

const ERROR_CLASS = `
  mt-1.5 text-xs text-red-600 flex items-center gap-1
`

export default function QuoteForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
  } = useForm()

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        onSuccess?.()
        reset()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitSuccessful, onSuccess, reset])

  async function onSubmit(data) {
    try {
      await axios.post('/api/quote', data)
    } catch {
      setError('root', { message: c.errorMessage })
      throw new Error('submission failed')
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitSuccessful ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center gap-4"
          style={{ padding: '4rem 2rem' }}
        >
          <div className="
            w-16 h-16 rounded-full
            bg-[var(--color-primary)]/10
            flex items-center justify-center
          ">
            <CheckCircle size={32} className="text-[var(--color-primary)]" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-[var(--color-text-strong)]">
            {c.successTitle}
          </h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed max-w-sm">
            {c.successBody}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            This window will close automatically…
          </p>
        </motion.div>
      ) : (
        <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

          {/* Dark branded header */}
          <div style={{
            background: 'var(--color-bg-main)',
            padding: '2rem 2rem 2rem',
          }}>
            {/* Logo */}
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}>
              CodeHe<span style={{ color: 'var(--color-primary)' }}>&#123;R&#125;</span>{' '}
              <span style={{ color: 'rgba(245,236,215,0.5)', fontSize: '0.7rem' }}>LLC</span>
            </p>
            {/* Eyebrow */}
            <p style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '0.75rem',
            }}>
              {c.eyebrow}
            </p>
            {/* Headline */}
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--color-text-light)',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}>
              {c.title}
            </h2>
            {/* Subtitle */}
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(245,236,215,0.6)',
              lineHeight: 1.6,
            }}>
              {c.subtitle}
            </p>
          </div>

          {/* Form body */}
          <div style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={LABEL_CLASS} htmlFor="qf-name">
                    {c.fields.name.label} <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="qf-name"
                    type="text"
                    placeholder={c.fields.name.placeholder}
                    className={FIELD_CLASS}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="qf-email">
                    {c.fields.email.label} <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="qf-email"
                    type="email"
                    placeholder={c.fields.email.placeholder}
                    className={FIELD_CLASS}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                    })}
                  />
                  {errors.email && (
                    <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className={LABEL_CLASS} htmlFor="qf-company">
                  {c.fields.company.label}
                </label>
                <input
                  id="qf-company"
                  type="text"
                  placeholder={c.fields.company.placeholder}
                  className={FIELD_CLASS}
                  {...register('company')}
                />
              </div>

              {/* Project Type */}
              <div>
                <label className={LABEL_CLASS} htmlFor="qf-service">
                  {c.fields.service.label} <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <select
                  id="qf-service"
                  className={FIELD_CLASS}
                  {...register('service', { required: 'Please select a project type' })}
                >
                  <option value="">Select a solution area...</option>
                  {c.fields.service.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className={LABEL_CLASS} htmlFor="qf-message">
                  {c.fields.message.label} <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <textarea
                  id="qf-message"
                  rows={4}
                  placeholder={c.fields.message.placeholder}
                  className={`${FIELD_CLASS} resize-y min-h-[100px]`}
                  {...register('message', { required: 'Please tell us about your project' })}
                />
                {errors.message && (
                  <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.message.message}</p>
                )}
              </div>

              {/* Root error */}
              {errors.root && (
                <div className="flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  {errors.root.message}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <><Loader size={16} className="animate-spin" /> Sending…</>
                ) : (
                  c.submitLabel
                )}
              </Button>
            </form>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
