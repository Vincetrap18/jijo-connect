import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Plane,
  Wallet,
  Sun,
} from "lucide-react"; // ← Import Lucide icons

const services = [
  {
    gradient: "from-orange-100 via-orange-50 to-white text-orange-600",
    bubble: "from-orange-400 to-orange-600 shadow-orange-500/40",
    title: "Direct Employment Visa",
    desc: "We handle verified job placements for bikers, security guards, drivers, waiters, and warehouse helpers — with guaranteed UAE contracts and employer support.",
    icon: <Globe2 className="w-7 h-7 text-white" />,
  },
  {
    gradient: "from-green-100 via-emerald-50 to-white text-emerald-600",
    bubble: "from-emerald-400 to-emerald-600 shadow-emerald-500/40",
    title: "Visit Visa for Job Seekers",
    desc: "Fly first, find work locally. Get your UAE visit visa processed in days — fast, affordable, and reliable with accommodation guidance upon arrival.",
    icon: <Plane className="w-7 h-7 text-white" />,
  },
  {
    gradient: "from-blue-100 via-blue-50 to-white text-blue-600",
    bubble: "from-blue-400 to-blue-600 shadow-blue-500/40",
    title: "Money Exchange & Transfers",
    desc: "Seamless AED ↔ KES remittances through M-Pesa and authorized UAE partners. Trusted by thousands for secure, real-time currency exchange.",
    icon: <Wallet className="w-7 h-7 text-white" />,
  },
  {
    gradient: "from-red-100 via-pink-50 to-white text-red-600",
    bubble: "from-red-400 to-pink-600 shadow-red-500/40",
    title: "Tourism & Holiday Packages",
    desc: "Plan your next getaway! From desert safaris to city tours — our curated Dubai packages include transport, guides, and unforgettable experiences.",
    icon: <Sun className="w-7 h-7 text-white" />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative max-w-7xl mx-auto px-6 py-20">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10" />

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 tracking-tight"
        >
          Our Trusted Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          At{" "}
          <span className="font-semibold text-red-600">Jijoh Tours & Tourism</span>, we bridge
          opportunities between{" "}
          <span className="text-amber-600 font-medium">Kenya</span> and{" "}
          <span className="text-sky-600 font-medium">Dubai</span> — making your dreams abroad a
          reality with our all-in-one visa, travel, and financial services.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.article
            key={i}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl border border-gray-100 bg-gradient-to-br ${s.gradient} shadow-md hover:shadow-lg transition overflow-hidden group`}
          >
            {/* Inner content */}
            <div className="relative z-10 p-8 flex flex-col items-center text-center">
              {/* Circular gradient bubble */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.bubble} flex items-center justify-center shadow-inner shadow-white/40 mb-5 group-hover:shadow-lg group-hover:shadow-current/30 transition-all duration-300`}
              >
                {s.icon}
              </div>

              <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>

            {/* Hover overlay glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.bubble} opacity-0 group-hover:opacity-10 blur-2xl transition duration-500`}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
