import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Flame,
  ShieldCheck,
  Briefcase,
  HardHat,
  Globe,
  HeartPulse,
} from "lucide-react";

const courses = [
  {
    title: "Diploma in Fire and Industrial Safety",
    items: [
      "Comprehensive Fire & Safety Training Program",
      "Advanced Industrial Safety Techniques and Regulations",
    ],
    shortItems: ["Fire & Safety Training", "Industrial Safety Basics"],
    color: "border-orange-500",
    icon: <Flame className="w-6 h-6 mr-2" />,
  },
  {
    title: "IOSH (Managing Safely)",
    items: [
      "Globally Recognized Safety Course",
      "Designed for Managers and Supervisors",
    ],
    shortItems: ["Global Safety Course", "For Managers & Supervisors"],
    color: "border-blue-500",
    icon: <ShieldCheck className="w-6 h-6 mr-2" />,
  },
  {
    title: "ADIS & PDIS",
    items: [
      "Advanced Diploma in Industrial Safety (ADIS)",
      "Post Diploma in Industrial Safety (PDIS) – Government Approved",
    ],
    shortItems: ["ADIS & PDIS Safety Programs"],
    color: "border-yellow-500",
    icon: <Briefcase className="w-6 h-6 mr-2" />,
  },
  {
    title: "OSHA 30-Hour Training",
    items: [
      "Occupational Safety & Health Standards (General Industry)",
      "Authorized OSHA 30-Hour Certification Course",
    ],
    shortItems: ["OSHA 30-Hour Safety Training"],
    color: "border-purple-500",
    icon: <HardHat className="w-6 h-6 mr-2" />,
  },
  {
    title: "NEBOSH IGC",
    items: [
      "Globally Recognized Safety Qualification",
      "Ideal for International HSE Careers",
    ],
    shortItems: ["International Safety Qualification"],
    color: "border-red-500",
    icon: <Globe className="w-6 h-6 mr-2" />,
  },
  {
    title: "First Aid & CPR Training",
    items: [
      "Hands-on Emergency Medical Training",
      "Covers CPR, Bleeding Control & Shock Management",
    ],
    shortItems: ["First Aid & CPR Basics"],
    color: "border-green-400",
    icon: <HeartPulse className="w-6 h-6 mr-2" />,
  },
];

const PopularCourses = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-green-50 py-16 px-4 text-center">
      <motion.h2
        className="text-4xl font-bold text-green-700 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Popular Courses
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            className={`bg-white rounded-2xl shadow-md border-t-4 ${course.color}
              flex flex-col overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              setExpanded(expanded === idx ? null : idx)
            }
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm md:text-lg font-semibold py-3 px-4 flex items-center">
              {course.icon}
              {course.title}
            </div>

            {/* Items */}
            <div className="px-4 py-4 text-left flex-grow space-y-2">
              {/* Mobile (short description + toggle) */}
              <div className="block md:hidden">
                {(expanded === idx ? course.items : course.shortItems).map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-start text-gray-700 text-xs"
                    >
                      <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 mr-2" />
                      <span>{item}</span>
                    </div>
                  )
                )}
                <button
                  className="mt-2 text-green-600 text-xs font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(expanded === idx ? null : idx);
                  }}
                >
                  {expanded === idx ? "Show Less" : "Read More"}
                </button>
              </div>

              {/* Desktop (full description always visible) */}
              <div className="hidden md:block">
                {course.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <CheckCircle className="text-green-500 w-4 h-4 mt-1 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
