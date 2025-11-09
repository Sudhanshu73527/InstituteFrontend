import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Cpu, Briefcase } from "lucide-react";

const highlights = [
  {
    id: "01",
    title: "Field Training & Drills",
    description:
      "Master real-world safety practices through industrial simulations, emergency evacuations, and fire safety drills.",
    icon: <Flame className="w-8 h-8 text-white" />,
    color: "from-orange-400 via-amber-400 to-yellow-400",
  },
  {
    id: "02",
    title: "Certified Expert Faculty",
    description:
      "Learn from seasoned professionals, certified trainers, and ex-safety officers with decades of real experience.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    color: "from-emerald-400 via-green-500 to-lime-400",
  },
  {
    id: "03",
    title: "Modern Safety Labs",
    description:
      "Train in simulated industrial environments with cutting-edge tools and real-time hazard control exercises.",
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: "from-sky-400 via-blue-500 to-indigo-500",
  },
  {
    id: "04",
    title: "Job-Oriented Curriculum",
    description:
      "Globally aligned courses that boost employability with internationally recognized safety certifications.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "from-purple-500 via-fuchsia-500 to-pink-400",
  },
];

const SafetyHighlights = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.1),transparent_70%)]" />

      {/* Title */}
      <div className="text-center mb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
            CIHS Safety Courses
          </span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Experience safety training redefined with immersive learning,
          cutting-edge labs, and guidance from industry veterans.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative group rounded-3xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.25)] transition-all duration-500"
          >
            {/* Animated Gradient Border */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl bg-gradient-to-r ${item.color}`}
            ></div>

            {/* Glass Content */}
            <div className="relative z-10 p-8 text-center bg-white/70 backdrop-blur-md rounded-3xl">
              {/* Icon Container */}
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${
                  hovered === index ? "scale-110 rotate-3" : ""
                }`}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3
                className={`text-lg font-semibold mb-3 transition-colors ${
                  hovered === index
                    ? "text-emerald-600"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                hovered === index
                  ? "bg-gradient-to-tr from-white/30 via-transparent to-transparent"
                  : ""
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SafetyHighlights;
