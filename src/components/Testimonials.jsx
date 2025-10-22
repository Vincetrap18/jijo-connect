import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David, Nairobi",
    quote: "I got my dream job — thanks to Jijoh Tours & Tourism!",
    image: "/images/testimonials/male-office.jpg",
  },
  {
    name: "Ahmed, Mombasa",
    quote: "Reliable, fast processing — I recommend Jijoh to everyone.",
    image: "/images/testimonials/male-construction.jpg",
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
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <blockquote className="text-gray-800 italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-2 text-sm text-gray-600">
                  — {t.name}
                </figcaption>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
