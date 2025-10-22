import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

// 🧠 Lazy load non-critical sections for better performance
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTASection = lazy(() => import("../components/CTASection"));

export default function Home() {
  return (
    <main
      id="home"
      className="font-sans text-neutral-900 bg-neutral-50 min-h-screen overflow-x-hidden scroll-smooth selection:bg-brand-500 selection:text-white"
    >
      {/* 🏔 HERO SECTION */}
      <HeroSection />

      {/* 🌀 Deferred Sections (Lazy-loaded) */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-20 text-neutral-500 animate-pulseSoft">
            <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-medium tracking-wide">
              Loading amazing content...
            </p>
          </div>
        }
      >
        {/* 🌍 SERVICES SECTION */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10"
        >
          <ServicesSection />
        </motion.section>

        {/* 💼 WHY CHOOSE US */}
        <motion.section
          id="why"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="bg-gradient-to-b from-white to-neutral-100 relative z-10"
        >
          <WhyChooseUs />
        </motion.section>

        {/* 💬 TESTIMONIALS */}
        <motion.section
          id="testimonials"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="bg-white relative z-10"
        >
          <Testimonials />
        </motion.section>

        {/* 🚀 CALL TO ACTION */}
        <motion.section
          id="cta"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-20 bg-brand-gradient text-white shadow-glow"
        >
          <CTASection />
        </motion.section>
      </Suspense>

      {/* ⚡ Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="#home"
          aria-label="Scroll to top"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white shadow-brand hover:bg-brand-600 transition duration-300 ease-out-soft"
        >
          ↑
        </a>
      </motion.div>
    </main>
  );
}
