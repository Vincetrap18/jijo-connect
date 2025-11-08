import React, { Suspense } from 'react';
import Router from './routes/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1" role="main">
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20 text-gray-500 animate-pulse">
              Loading content...
            </div>
          }
        >
          {/* Framer Motion route transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Router />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== WhatsApp Floating Button ===== */}
      <WhatsAppButton />
    </div>
  );
}
