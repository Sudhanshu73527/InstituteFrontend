import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

// Highlight content
const highlights = [
  {
    id: "01",
    title: "Field Training & Drills",
    description:
      "Get real-world experience with fire safety drills, industrial hazard handling, and emergency evacuations.",
    short: "Hands-on drills & emergency training.",
  },
  {
    id: "02",
    title: "Certified Expert Faculty",
    description:
      "Learn from certified professionals and retired safety officers with years of field experience.",
    short: "Trained by certified experts.",
  },
  {
    id: "03",
    title: "Modern Safety Labs",
    description:
      "Our labs simulate industrial environments to help students train on real equipment safely.",
    short: "Industrial-like lab training.",
  },
  {
    id: "04",
    title: "Job-Oriented Curriculum",
    description:
      "Courses aligned with international safety standards, designed to boost your employability.",
    short: "Career-focused curriculum.",
  },
];

// Unique hover shadow colors per card
const shadowColors = [
  "hover:shadow-orange-400/60",
  "hover:shadow-green-400/60",
  "hover:shadow-blue-400/60",
  "hover:shadow-purple-400/60",
];

const SafetyHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-slate-800 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Safety Officer Course at{" "}
        <span className="text-green-500">CIHS</span> Stands Out
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative px-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center text-center bg-white rounded-3xl p-6 shadow-md transition-transform duration-500 ease-in-out cursor-pointer
              ${
                hoveredIndex === index
                  ? `scale-105 z-10 shadow-2xl ${shadowColors[index % shadowColors.length]}`
                  : ""
              } ${shadowColors[index % shadowColors.length]}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setExpanded(expanded === index ? null : index)
            }
          >
            {/* Circle Icon with Animated Number */}
            <motion.div
              className={`relative flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 mb-6 bg-gradient-to-tr from-orange-400 to-yellow-300 text-white
              transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? "scale-110 shadow-2xl" : "shadow-md"
              }`}
              whileHover={{ rotate: 10 }}
            >
              <Lightbulb
                className={`w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-700 ease-in-out ${
                  hoveredIndex === index ? "rotate-[20deg] scale-110" : ""
                }`}
              />
              <span
                className={`absolute -top-3 -left-3 bg-orange-600 text-white font-bold text-xs md:text-sm w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center
                transition-transform duration-700 ease-in-out ${
                  hoveredIndex === index ? "rotate-[360deg]" : "rotate-0"
                }`}
              >
                {item.id}
              </span>
            </motion.div>

            {/* Title */}
            <h3
              className={`text-sm md:text-xl font-semibold mb-2 transition-colors duration-500 ${
                hoveredIndex === index ? "text-green-600" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-xs md:text-base px-1 md:px-2">
              {/* Mobile: Short with toggle */}
              <span className="block md:hidden">
                {expanded === index ? item.description : item.short}
              </span>
              {/* Desktop: Full description */}
              <span className="hidden md:block">{item.description}</span>
            </p>

            {/* Toggle button for mobile */}
            <button
              className="mt-2 text-green-600 text-[10px] md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(expanded === index ? null : index);
              }}
            >
              {expanded === index ? "Show Less" : "Read More"}
            </button>

            {/* Arrow */}
            {index < highlights.length - 1 && (
              <ArrowRight
                size={28}
                className={`hidden lg:block absolute right-[-48px] top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-500
                ${
                  hoveredIndex === index
                    ? "opacity-100 translate-x-2"
                    : "opacity-40 translate-x-0"
                }`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SafetyHighlights;
