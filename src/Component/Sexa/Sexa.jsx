import React from "react";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Sexa = () => {
  const categories = [
    {
      title: "Institute",
      icon: <FaUniversity className="text-4xl text-blue-600" />,
    },
    {
      title: "Students",
      icon: <FaUserGraduate className="text-4xl text-blue-500" />,
    },
    {
      title: "Guides",
      icon: <FaChalkboardTeacher className="text-4xl text-blue-700 " />,
    },
  ];

  return (
    <div className="bg-green-500 p-6 rounded">
      {/* Heading and Prompt */}
      <div className="text-center text-white mb-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">Our Core Strengths</h2>
        <p className="text-sm md:text-base mt-2">
          Empowering students through strong academic, guidance, and institutional support.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center hover:text-white">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-blue-400 w-44 h-36 flex flex-col items-center justify-center rounded-sm shadow-md"
          >
            {category.icon}
            <p className="mt-3 text-lg font-semibold text-black hover:text-white">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sexa;
