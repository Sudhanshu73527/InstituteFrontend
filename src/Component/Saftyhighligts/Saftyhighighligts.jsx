import React, { useState } from "react";
import { Lightbulb } from "lucide-react";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    id: "01",
    title: "Field Training & Drills",
    description: "Get real-world experience with fire safety drills, industrial hazard handling, and emergency evacuations.",
  },
  {
    id: "02",
    title: "Certified Expert Faculty",
    description: "Learn from certified professionals and retired safety officers with years of field experience.",
  },
  {
    id: "03",
    title: "Modern Safety Labs",
    description: "Our labs simulate industrial environments to help students train on real equipment safely.",
  },
  {
    id: "04",
    title: "Job-Oriented Curriculum",
    description: "Courses aligned with international safety standards, designed to boost your employability.",
  },
];

const SafetyHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
        Why Safety Officer Course at CIHS Stands Out
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Numbered Circle with icon */}
         <div className="relative mb-4 group">
  <div
    className={`bg-orange-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto relative hover:bg-yellow-400 transition duration-300 ${
      hoveredIndex === index ? "blink-raise" : ""
    }`}
  >
    <Lightbulb className="text-orange-500 w-8 h-8 transition duration-300" />

    {/* Rotating Number */}
    <span
      className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg]"
    >
      {item.id}
    </span>
  </div>
</div>


            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-lg text-gray-600 px-4">{item.description}</p>

            {/* Arrow Connector */}
            {index < highlights.length - 1 && (
              <ArrowRight
                className="hidden lg:block absolute right-[-36px] top-[40%] text-gray-400 rotate-[-20deg]"
                size={28}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyHighlights;
