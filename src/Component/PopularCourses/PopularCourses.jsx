import React from "react";
import { CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Diploma in Fire and Industrial Safety",
    items: [
      "Comprehensive Fire & Safety Training Program",
      "Advanced Industrial Safety Techniques and Regulations",
    ],
    color: "border-orange-500",
  },
  {
    title: "IOSH (Managing Safely)",
    items: [
      "Globally Recognized Safety Course",
      "Designed for Managers and Supervisors",
    ],
    color: "border-blue-500",
  },
  {
    title: "ADIS & PDIS",
    items: [
      "Advanced Diploma in Industrial Safety (ADIS)",
      "Post Diploma in Industrial Safety (PDIS) – Government Approved",
    ],
    color: "border-yellow-500",
  },
  {
    title: "OSHA 30-Hour Training",
    items: [
      "Occupational Safety & Health Standards (General Industry)",
      "Authorized OSHA 30-Hour Certification Course",
    ],
    color: "border-purple-500",
  },
];

const PopularCourses = () => {
  return (
    <section className="bg-green-50 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-12">
        Popular Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-md border-t-4 ${course.color}
              flex flex-col overflow-hidden`}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-4 px-6">
              {course.title}
            </div>
            <div className="px-6 py-5 text-left flex-grow space-y-3">
              {course.items.map((item, i) => (
                <div key={i} className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-1 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="px-6 pb-4 pt-2">
              <a
                href="#"
                className="inline-block text-green-400 text-sm font-semibold"
              >
                + Check More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
