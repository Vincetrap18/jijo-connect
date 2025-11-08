import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you’re seeking a visa, job placement, or want to partner with us — we’d love to hear from you.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-4 p-8 rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-white to-red-50">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border-gray-200 focus:ring-red-500 focus:border-red-500 shadow-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border-gray-200 focus:ring-red-500 focus:border-red-500 shadow-sm"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              className="mt-1 w-full rounded-lg border-gray-200 focus:ring-red-500 focus:border-red-500 shadow-sm"
              placeholder="How can we assist you?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Maps */}
        <div className="space-y-8">
          {/* Offices */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-gray-900 text-lg">Our Offices</h3>
            </div>
            <p className="text-gray-600 text-sm">
              <span className="font-medium text-gray-800">Kenya Office:</span> Nairobi CBD, Kenyatta Avenue
              <br />
              <span className="font-medium text-gray-800">UAE Office:</span> Al Qusais, Dubai
            </p>
            {/* Maps */}
            <div className="grid gap-4 mt-4">
              <iframe
                title="Kenya Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.895760279!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10df65bb9b3b%3A0x1c9f3f3c6f6b3!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1697654321!5m2!1sen!2ske"
                className="w-full h-40 rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <iframe
                title="UAE Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.012345!2d55.333333!3d25.266667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c3b2c3b2c3b%3A0x123456789abcdef!2sAl%20Qusais%2C%20Dubai!5e0!3m2!1sen!2suae!4v1697654321!5m2!1sen!2suae"
                className="w-full h-40 rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Call */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-3">
            <Phone className="w-6 h-6 text-amber-500" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
              <p className="text-gray-600 text-sm">
                Kenya: <span className="font-medium text-gray-800">+254 757 425239</span>
                <br />
                UAE: <span className="font-medium text-gray-800">+971 581084957</span>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-3">
            <Mail className="w-6 h-6 text-sky-500" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
              <p className="text-gray-600 text-sm">jijohtours@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
