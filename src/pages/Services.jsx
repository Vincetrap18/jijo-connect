import { useState } from "react";
import { User, MapPin, Briefcase, CreditCard, Users, Airplay, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Direct Employment Visa",
    short: "Secure your future with guaranteed employment opportunities abroad.",
    desc: "We provide full support for direct employment visas including document processing, employer verification, and relocation guidance. Jijoh Tours ensures transparency, legal compliance, and fast-track services for Kenyan professionals seeking stable work opportunities in Dubai.",
    icon: User,
    gradient: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-500/30",
  },
  {
    title: "Visit Visa for Job Seekers",
    short: "Travel to Dubai with a job-seeking visit visa and explore opportunities firsthand.",
    desc: "Our team assists clients in securing short-term visit visas designed for job seekers. We handle application paperwork, travel insurance, and follow-up. This service allows you to attend interviews, meet potential employers, and network confidently while in Dubai.",
    icon: MapPin,
    gradient: "from-green-400 to-emerald-600",
    shadow: "shadow-emerald-500/30",
  },
  {
    title: "Money Exchange & Transfers",
    short: "Fast, reliable, and affordable money transfer services between Kenya and UAE.",
    desc: "We provide seamless foreign exchange and international money transfer services. Our platform ensures competitive exchange rates, minimal fees, and instant delivery. Perfect for supporting families, business operations, or paying bills abroad.",
    icon: CreditCard,
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/30",
  },
  {
    title: "Tourism Packages",
    short: "Discover Dubai’s beauty through our tailored travel and tourism packages.",
    desc: "We organize group tours, honeymoon packages, and personalized travel itineraries covering top destinations across Dubai and the UAE. Jijoh Tours handles flights, accommodation, and local transport—making your trip hassle-free and memorable.",
    icon: Airplay,
    gradient: "from-red-400 to-pink-600",
    shadow: "shadow-red-500/30",
  },
  {
    title: "Talent Sourcing & Matching",
    short: "Connecting skilled Kenyans with verified employers in Dubai and beyond.",
    desc: "Our recruitment experts source and vet talent across multiple industries. We match professionals to top companies based on skill, experience, and career goals—creating win-win solutions for employers and job seekers alike.",
    icon: Users,
    gradient: "from-amber-400 to-yellow-600",
    shadow: "shadow-amber-500/30",
  },
  {
    title: "Corporate Recruitment",
    short: "Tailored HR and recruitment solutions for companies expanding globally.",
    desc: "We partner with corporate clients to fulfill staffing requirements for both short-term projects and permanent roles. Jijoh Tours offers workforce planning, visa coordination, and onboarding assistance for organizations hiring internationally.",
    icon: Briefcase,
    gradient: "from-purple-400 to-violet-600",
    shadow: "shadow-purple-500/30",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-red-600 tracking-tight"
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          At <span className="font-semibold text-red-600">Jijoh Tours & Tourism</span>, we provide seamless connections between{" "}
          <span className="text-amber-600 font-medium">Kenya</span> and{" "}
          <span className="text-sky-600 font-medium">Dubai</span>. Our services cover visas, employment, travel, and financial
          solutions — empowering your international success.
        </motion.p>
      </div>

      {/* ==== Services Grid ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl shadow-md overflow-hidden group border border-gray-100 bg-white`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-10 blur-3xl transition duration-500`} />

              <div className="relative z-10 p-8 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br ${s.gradient} ${s.shadow}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.short}</p>

                <button
                  onClick={() => setSelected(s)}
                  className="mt-4 text-sm font-medium text-red-600 hover:text-red-700 transition"
                >
                  Learn more →
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ==== Modal Popup ==== */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-gradient-to-br ${selected.gradient} ${selected.shadow}`}>
                  <selected.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{selected.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{selected.desc}</p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
