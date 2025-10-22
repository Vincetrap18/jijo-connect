import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Trusted by Hundreds",
    desc: "Positive outcomes, returning clients, and verified success stories across Kenya & UAE.",
  },
  {
    title: "Fast & Reliable Processing",
    desc: "Streamlined visa applications, quick approvals, and verified employer placements.",
  },
  {
    title: "Competitive Prices",
    desc: "Affordable, transparent fees for visas, tours, and employment services.",
  },
  {
    title: "Kenya & UAE Offices",
    desc: "Local presence ensures faster support, guidance, and issue resolution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-10 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-red-200/20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-16 -right-8 w-64 h-64 rounded-full bg-amber-200/10 blur-3xl animate-float-slow-reverse" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4"
        >
          Why Choose Jijoh?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          Trusted, fast, and with offices in both Kenya & the UAE — we make your journey seamless.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-default"
            >
              <CheckCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">{p.title}</div>
                <div className="text-gray-500 text-sm">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
