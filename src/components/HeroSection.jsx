// src/components/HeroSection.jsx
import { motion, useReducedMotion } from "framer-motion";
import { Plane, Briefcase, Building2, Globe2 } from "lucide-react";
import skyline from "/images/skyline.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="relative text-white overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* background with cinematic parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        aria-hidden
      >
        <img
          src={skyline}
          alt="Dubai skyline"
          className="w-full h-full object-cover object-center opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-black/60 to-black/90" />
      </motion.div>

      {/* floating ambient orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute -left-16 -top-8 w-48 h-48 rounded-full bg-red-500/20 blur-3xl"
            animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-28 w-36 h-36 rounded-full bg-amber-400/10 blur-3xl"
            animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* hero content */}
      <div className="container relative z-10 flex flex-col justify-center h-full py-16 text-center md:text-left">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="uppercase tracking-widest text-white text-xs md:text-sm"
        >
          Kenya • Dubai • Global Opportunities
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-3 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md text-white"
        >
          Jijoh Tours & Tourism
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-4 text-sm md:text-lg text-white max-w-2xl leading-relaxed mx-auto md:mx-0"
        >
          Empowering your journey from{" "}
          <span className="text-red-400 font-semibold">Kenya</span> to{" "}
          <span className="text-amber-400 font-semibold">Dubai</span> — we
          connect dreamers, workers, and travelers with authentic visa
          processing, secure employment, and guided travel solutions.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-3 text-xs md:text-sm text-white max-w-lg leading-relaxed mx-auto md:mx-0"
        >
          Accredited by UAE partners and trusted by thousands across East
          Africa. Your success abroad starts here — with Jijoh, your rise, your
          home.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-8 flex gap-4 justify-center md:justify-start"
        >
          <a
            href="apply"
            className="text-sm md:text-base px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 rounded-md font-medium"
          >
            Apply Now
          </a>
          <a
            href="services"
            className="text-sm md:text-base px-5 py-2.5 border border-white/50 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 rounded-md font-medium"
          >
            View Services
          </a>
        </motion.div>

        {/* trust badges */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-3 text-xs text-white">
            <Plane className="w-5 h-5 text-amber-400" />
            <span>Direct Flights & Travel Support</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white">
            <Briefcase className="w-5 h-5 text-red-400" />
            <span>Verified UAE Job Placement</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white">
            <Building2 className="w-5 h-5 text-sky-400" />
            <span>Visa & Accommodation Assistance</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white">
            <Globe2 className="w-5 h-5 text-green-400" />
            <span>Kenya–UAE Partnership Network</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
