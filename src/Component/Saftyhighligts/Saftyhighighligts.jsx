import React, { useState } from "react";
import { Lightbulb, ArrowRight } from "lucide-react";

const highlights = [
  {
    id: "01",
    title: "Field Training & Drills",
    description:
      "Get real-world experience with fire safety drills, industrial hazard handling, and emergency evacuations.",
  },
  {
    id: "02",
    title: "Certified Expert Faculty",
    description:
      "Learn from certified professionals and retired safety officers with years of field experience.",
  },
  {
    id: "03",
    title: "Modern Safety Labs",
    description:
      "Our labs simulate industrial environments to help students train on real equipment safely.",
  },
  {
    id: "04",
    title: "Job-Oriented Curriculum",
    description:
      "Courses aligned with international safety standards, designed to boost your employability.",
  },
];

const SafetyHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16">
        Why Safety Officer Course at{" "}
        <span className="text-green-500">CIHS</span> Stands Out
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative px-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-md transition-transform duration-500 ease-in-out
              ${
                hoveredIndex === index
                  ? "shadow-xl scale-105 z-10"
                  : "hover:scale-102"
              }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Numbered Circle with Icon */}
            <div
              className={`relative flex items-center justify-center rounded-full w-24 h-24 mb-6 bg-gradient-to-tr from-orange-400 to-yellow-300 text-white shadow-lg
              transition-all duration-500 ease-in-out
              ${hoveredIndex === index ? "scale-110 shadow-2xl" : "shadow-md"}
              `}
            >
              <Lightbulb
                className={`w-10 h-10 text-white transition-transform duration-700 ease-in-out ${
                  hoveredIndex === index ? "rotate-[20deg] scale-110" : ""
                }`}
              />
              <span
                className={`absolute -top-3 -left-3 bg-orange-600 text-white font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center
                transition-transform duration-700 ease-in-out
                ${hoveredIndex === index ? "rotate-[360deg]" : "rotate-0"}
                `}
              >
                {item.id}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-xl font-semibold text-gray-900 mb-3 transition-colors duration-500 ${
                hoveredIndex === index ? "text-green-600" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base px-2">{item.description}</p>

            {/* Arrow Connector */}
            {index < highlights.length - 1 && (
              <ArrowRight
                size={28}
                className={`hidden lg:block absolute right-[-48px] top-1/2 transform -translate-y-1/2 text-gray-400 transition-opacity duration-500 ease-in-out
                ${
                  hoveredIndex === index
                    ? "opacity-100 translate-x-2"
                    : "opacity-40 translate-x-0"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyHighlights;
