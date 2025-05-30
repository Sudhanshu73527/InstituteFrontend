import React from "react";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";

const Sexa = () => {
  const categories = [
    {
      title: "University",
      icon: <FaUniversity className="text-4xl text-blue-600" />,
    },
    {
      title: "Students",
      icon: <FaUserGraduate className="text-4xl text-blue-500" />,
    },
    {
      title: "Guides",
      icon: <FaChalkboardTeacher className="text-4xl text-gray-700" />,
    },
    {
      title: "Mentors",
      icon: <FaHandsHelping className="text-4xl text-blue-400" />,
    },
  ];

  return (
    <div className="bg-[#183162] p-6 rounded-t-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white w-48 h-40 flex flex-col items-center justify-center rounded-sm shadow-md"
          >
            {category.icon}
            <p className="mt-4 text-lg font-semibold text-black">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sexa;
