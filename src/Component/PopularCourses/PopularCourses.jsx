import React from "react";

const courses = [
  {
    title: "Diploma in Fire and Industrial Safety",
    items: [
      "Comprehensive Fire & Safety Training Program",
      "Advanced Industrial Safety Techniques and Regulations",
    ],
  },
  {
    title: "IOSH (Managing Safely)",
    items: [
      "Globally Recognized Safety Course",
      "Designed for Managers and Supervisors",
    ],
  },
  {
    title: "ADIS & PDIS",
    items: [
      "Advanced Diploma in Industrial Safety (ADIS)",
      "Post Diploma in Industrial Safety (PDIS) – Government Approved",
    ],
  },
  {
    title: "OSHA 30-Hour Training",
    items: [
      "Occupational Safety & Health Standards (General Industry)",
      "Authorized OSHA 30-Hour Certification Course",
    ],
  },
];

const PopularCourses = () => {
  return (
    <section className="bg-green-100 py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-10">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-md shadow-sm flex flex-col h-full"
          >
            <div className="bg-green-500 text-white font-semibold text-lg py-3 rounded-t-md">
              {course.title}
            </div>
            <div className="text-left px-6 py-4 flex-grow space-y-2">
              {course.items.map((item, i) => (
                <div key={i} className="text-sm text-gray-800">
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 py-3">
              <a
                href="#"
                className="text-sky-600 text-sm font-semibold hover:underline hover:text-green-500"
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
