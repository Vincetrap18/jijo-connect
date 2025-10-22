import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Briefcase, Plane } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-red-600" />, label: "Clients Served", value: "5,000+" },
    { icon: <Briefcase className="w-6 h-6 text-amber-500" />, label: "Jobs Placed", value: "2,500+" },
    { icon: <Plane className="w-6 h-6 text-sky-500" />, label: "Flights Booked", value: "3,200+" },
    { icon: <Globe className="w-6 h-6 text-green-500" />, label: "Global Partners", value: "50+" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          About Jijoh Tours & Tourism
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Bridging Kenya & UAE opportunities with trusted employment, travel, and financial services.
        </p>
      </motion.div>

      {/* Company Overview & Stats */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jijoh Tours & Tourism empowers individuals to access life-changing opportunities abroad. 
            Our mission is to simplify the path to employment, travel, and exchange between East Africa and the UAE.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With decades of combined experience, we ensure ethical, transparent, and seamless processes for all clients and partners.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => {
                let bgColor, borderColor;
                switch (i) {
                case 0: // Clients Served
                    bgColor = "bg-red-50";
                    borderColor = "border-red-100";
                    break;
                case 1: // Jobs Placed
                    bgColor = "bg-amber-50";
                    borderColor = "border-amber-100";
                    break;
                case 2: // Flights Booked
                    bgColor = "bg-sky-50";
                    borderColor = "border-sky-100";
                    break;
                case 3: // Global Partners
                    bgColor = "bg-green-50";
                    borderColor = "border-green-100";
                    break;
                default:
                    bgColor = "bg-gray-50";
                    borderColor = "border-gray-100";
                }

                return (
                <div
                    key={i}
                    className={`${bgColor} ${borderColor} rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition`}
                >
                    {s.icon}
                    <span className="mt-3 text-2xl font-bold text-gray-900">{s.value}</span>
                    <span className="text-gray-600">{s.label}</span>
                </div>
                );
            })}
            </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be the most trusted bridge between Kenya and the UAE, creating dignified
            opportunities for work, travel, and investment.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="bg-amber-50 p-8 rounded-2xl border border-amber-100 shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold text-amber-600 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Connecting Africans to global opportunities through ethical recruitment,
            transparent processes, and world-class travel services.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition text-center">
            <h4 className="font-semibold text-red-600 mb-2">Integrity</h4>
            <p className="text-gray-600 text-sm">In every engagement and decision we make.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition text-center">
            <h4 className="font-semibold text-amber-600 mb-2">Transparency</h4>
            <p className="text-gray-600 text-sm">Clear processes and honest communication.</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition text-center">
            <h4 className="font-semibold text-sky-600 mb-2">Customer-First</h4>
            <p className="text-gray-600 text-sm">Dedicated support for every client’s success.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition text-center">
            <h4 className="font-semibold text-green-600 mb-2">Empowerment</h4>
            <p className="text-gray-600 text-sm">Creating opportunities that uplift individuals and communities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
