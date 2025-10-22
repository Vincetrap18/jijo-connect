import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Top In-Demand Jobs for Kenyans in Dubai (2025)",
    excerpt:
      "Find out which industries are hiring the most and how Jijoh helps connect you with reliable employers.",
    date: "Oct 10, 2025",
    category: "Employment",
  },
  {
    title: "How to Apply for a UAE Visit Visa Smoothly",
    excerpt:
      "Step-by-step guide for Kenyans applying for UAE visit visas — plus what to expect after landing.",
    date: "Sep 28, 2025",
    category: "Visa Guide",
  },
  {
    title: "Real Stories: From Nairobi to Dubai",
    excerpt:
      "Meet our clients who successfully relocated to the UAE through Jijoh’s verified recruitment process.",
    date: "Sep 15, 2025",
    category: "Success Stories",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
      {/* Page heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Insights & Updates
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Stay informed with the latest updates on Dubai jobs, travel policies, and success stories from Jijoh’s global community.
        </p>
      </motion.div>

      {/* Blog posts grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg overflow-hidden group"
          >
            {/* Category tag */}
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
              {post.category}
            </span>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{post.date}</span>
                <a
                  href="#"
                  className="text-red-600 font-medium text-sm hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-red-100 to-white opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
        >
          View All Articles
        </a>
      </div>
    </div>
  );
}
