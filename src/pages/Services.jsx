import { User, MapPin, Briefcase, CreditCard, Users, Airplay } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Direct Employment Visa",
    desc: "...",
    icon: User,
    gradient: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-500/30",
    text: "text-orange-600",
  },
  {
    title: "Visit Visa for Job Seekers",
    desc: "...",
    icon: MapPin,
    gradient: "from-green-400 to-emerald-600",
    shadow: "shadow-emerald-500/30",
    text: "text-emerald-600",
  },
  {
    title: "Money Exchange & Transfers",
    desc: "...",
    icon: CreditCard,
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/30",
    text: "text-blue-600",
  },
  {
    title: "Tourism Packages",
    desc: "...",
    icon: Airplay,
    gradient: "from-red-400 to-pink-600",
    shadow: "shadow-red-500/30",
    text: "text-red-600",
  },
  {
    title: "Talent Sourcing & Matching",
    desc: "...",
    icon: Users,
    gradient: "from-amber-400 to-yellow-600",
    shadow: "shadow-amber-500/30",
    text: "text-amber-600",
  },
  {
    title: "Corporate Recruitment",
    desc: "...",
    icon: Briefcase,
    gradient: "from-purple-400 to-violet-600",
    shadow: "shadow-purple-500/30",
    text: "text-purple-600",
  },
];

export default function Services() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl shadow-md overflow-hidden group border border-gray-100`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-10 blur-3xl transition duration-500`}
              />

              <div className="relative z-10 p-8 flex flex-col items-center text-center">
                {/* Circular icon bubble */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br ${s.gradient} ${s.shadow}`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className={`font-semibold text-gray-900 text-lg mb-2`}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
