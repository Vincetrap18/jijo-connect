import React from "react";
import { motion } from "framer-motion";

export default function Apply() {
  return (
    <section className="min-h-screen bg-neutral-50 flex items-center justify-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-card p-8 sm:p-10 max-w-2xl w-full"
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center text-neutral-900 mb-2">
          Apply for <span className="text-brand-500">Opportunities</span>
        </h1>
        <p className="text-center text-neutral-600 mb-8 max-w-md mx-auto">
          Fill in your details and our team will contact you shortly regarding available opportunities in Dubai.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Application submitted successfully!");
          }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="+254 712 345 678"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Service Interested In
            </label>
            <select
              id="service"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
            >
              <option value="">Select one</option>
              <option>Dubai Job Placement</option>
              <option>Travel & Visa Services</option>
              <option>Education Consultancy</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="Tell us a bit more about your needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-brand-gradient text-white font-semibold shadow-brand hover:shadow-glow transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </section>
  );
}
