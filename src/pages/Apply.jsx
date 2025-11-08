import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Apply() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendApplication = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qolhtqm",
        "template_7bp6p2j",
        form.current,
        "alrGFoqZ5FrMimP3-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

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
        <form ref={form} onSubmit={sendApplication} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="+254 712 345 678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Service Interested In
            </label>
            <select
              name="service"
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
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Additional Details
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full rounded-md border-neutral-300 focus:border-brand-500 focus:ring-brand-500 transition"
              placeholder="Tell us a bit more about your needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-brand-gradient text-white font-semibold shadow-brand hover:shadow-glow transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {success === true && <p className="text-green-600 mt-2 text-center">Application submitted successfully!</p>}
          {success === false && <p className="text-red-600 mt-2 text-center">Failed to submit. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  );
}
