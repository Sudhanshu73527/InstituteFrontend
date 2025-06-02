import React from "react";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const categories = [
  {
    title: "Institute",
    icon: <FaUniversity />,
    color: "text-blue-600",
  },
  {
    title: "Students",
    icon: <FaUserGraduate />,
    color: "text-green-500",
  },
  {
    title: "Guides",
    icon: <FaChalkboardTeacher />,
    color: "text-purple-600",
  },
];

const Sexa = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-green-600 py-12 px-6 rounded-xl shadow-lg">
      {/* Heading */}
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Our Core Strengths
        </h2>
        <p className="text-md md:text-lg mt-2 max-w-xl mx-auto text-white/90">
          Empowering students through strong academic, guidance, and institutional support.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white group rounded-2xl p-6 flex flex-col items-center justify-center shadow-md transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
          >
            <div
              className={`text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 ${cat.color}`}
            >
              {cat.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sexa;
