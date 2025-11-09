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
    title: "Diploma in Fire & Industrial Safety",
    items: [ 
      "Complete hands-on Fire & Safety Training",
      "Industrial Safety Techniques & Regulations",
    ],
    shortItems: ["Fire & Safety Training", "Industrial Safety Basics"],
    color: "from-yellow-200 to-yellow-100",
    icon: <Flame className="w-7 h-7 text-orange-500 animate-bounce" />,
  },
  { 
    title: "IOSH: Managing Safely",
    items: [
      "Globally Recognized Safety Program",
      "Specifically Designed for Managers & Supervisors",
    ],
    shortItems: ["Global Safety Program", "For Managers & Supervisors"],
    color: "from-blue-200 to-blue-100",
    icon: <ShieldCheck className="w-7 h-7 text-blue-500 animate-bounce" />,
  },
  {
    title: "ADIS & PDIS Safety Programs",
    items: [
      "Advanced Diploma in Industrial Safety (ADIS)",
      "Post Diploma in Industrial Safety (PDIS) – Govt Approved",
    ],
    shortItems: ["ADIS & PDIS Safety Programs"],
    color: "from-yellow-200 to-yellow-100",
    icon: <Briefcase className="w-7 h-7 text-yellow-500 animate-bounce" />,
  },
  {
    title: "OSHA 30-Hour Training",
    items: [
      "Occupational Safety & Health Standards (General Industry)",
      "Authorized OSHA 30-Hour Certification",
    ],
    shortItems: ["OSHA 30-Hour Safety Training"],
    color: "from-blue-200 to-blue-100",
    icon: <HardHat className="w-7 h-7 text-purple-500 animate-bounce" />,
  },
  {
    title: "NEBOSH IGC",
    items: [
      "Globally Recognized Safety Qualification",
      "Perfect for International HSE Careers",
    ],
    shortItems: ["International Safety Qualification"],
    color: "from-yellow-200 to-yellow-100",
    icon: <Globe className="w-7 h-7 text-red-500 animate-bounce" />,
  },
  {
    title: "First Aid & CPR",
    items: [
      "Hands-on Emergency Medical Training",
      "Covers CPR, Bleeding Control & Shock Management",
    ],
    shortItems: ["First Aid & CPR Basics"],
    color: "from-blue-200 to-blue-100",
    icon: <HeartPulse className="w-7 h-7 text-green-500 animate-bounce" />,
  },
];

const PopularCourses = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-green-50 py-20 px-4 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Popular Courses to Boost <span className="text-green-500">Your Safety Career </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br ${course.color} rounded-3xl shadow-lg border-t-4 border-green-500 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {/* Header */}
            <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-md text-green-900 font-semibold text-lg md:text-xl">
              {course.icon}
              <span>{course.title}</span>
            </div>

            {/* Items */}
            <div className="px-6 py-5 text-left space-y-2">
              {/* Mobile */}
              <div className="block md:hidden">
                {(expanded === idx ? course.items : course.shortItems).map(
                  (item, i) => (
                    <div key={i} className="flex items-start text-gray-700 text-sm">
                      <CheckCircle className="text-green-600 w-4 h-4 mt-1 mr-2" />
                      <span>{item}</span>
                    </div>
                  )
                )}
                <button
                  className="mt-2 text-green-700 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(expanded === idx ? null : idx);
                  }}
                >
                  {expanded === idx ? "Show Less" : "Read More"}
                </button>
              </div>

              {/* Desktop */}
              <div className="hidden md:block">
                {course.items.map((item, i) => (
                  <div key={i} className="flex items-start text-gray-700 text-sm md:text-base">
                    <CheckCircle className="text-green-600 w-4 h-4 mt-1 mr-2" />
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
