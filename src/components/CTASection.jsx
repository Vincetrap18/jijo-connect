import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-red-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-red-100"
      >
        <div>
          <h4 className="text-xl font-bold">Ready to begin your journey?</h4>
          <p className="mt-2 text-gray-700">
            Apply now and let us help you reach Dubai safely and affordably.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="apply"
            className="rounded-full bg-red-600 text-white px-5 py-3 font-semibold hover:bg-red-700 transition"
          >
            Apply Now
          </a>
          <a
            href="contact"
            className="rounded-full border border-white-200 px-5 py-3 hover:border-red-400 transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
