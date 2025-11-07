import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David, Nairobi",
    quote: "I got my dream job — thanks to Jijoh Tours & Tourism!",
  },
  {
    name: "Ahmed, Mombasa",
    quote: "Reliable, fast processing — I recommend Jijoh to everyone.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Success Stories</h3>
        <p className="mt-2 text-gray-600">
          Real stories from our clients who made the move.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md"
          >
            <blockquote className="text-gray-800 italic text-lg leading-relaxed">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-gray-600 text-right font-medium">
              — {t.name}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
