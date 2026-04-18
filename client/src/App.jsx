import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/layout/navbar/Navbar'
import Footer from '@/layout/footer/Footer'
import PageLoader from '@/ui/pageloader/PageLoader'
import Modal from '@/ui/modal/Modal'
import QuoteForm from '@/components/forms/quoteform/QuoteForm'
import { useModal } from '@/hooks/useModal'

const Home             = lazy(() => import('@/pages/home/Home'))
const WorkforceService = lazy(() => import('@/pages/services/workforce/WorkforceService'))
const DigitalService   = lazy(() => import('@/pages/services/digital/DigitalService'))

export default function App() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <BrowserRouter>
      <Navbar onQuoteClick={openModal} />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                   element={<Home onQuoteClick={openModal} />} />
            <Route path="/services/workforce" element={<WorkforceService onQuoteClick={openModal} />} />
            <Route path="/services/digital"   element={<DigitalService onQuoteClick={openModal} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      <Modal isOpen={isOpen} onClose={closeModal}>
        <QuoteForm onSuccess={closeModal} />
      </Modal>
    </BrowserRouter>
  )
}
