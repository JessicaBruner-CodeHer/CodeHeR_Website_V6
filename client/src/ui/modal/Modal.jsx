import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, children, title }) {
  // Close on Escape key
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKey])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[var(--color-bg-main)]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={title ?? 'Dialog'}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="
              fixed z-50 inset-x-4 top-1/2 -translate-y-1/2
              mx-auto w-full max-w-2xl
              bg-[var(--color-surface-white)] rounded-[var(--radius-xl)]
              shadow-[var(--shadow-lg)]
              overflow-hidden
            "
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="
                absolute top-4 right-4 z-10
                p-2 rounded-full
                text-[var(--color-text-muted)]
                hover:text-[var(--color-text-strong)]
                hover:bg-[var(--color-surface-muted)]
                transition-colors duration-[var(--transition-fast)]
              "
            >
              <X size={20} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
