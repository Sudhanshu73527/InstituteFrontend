import React from "react";
import CountUp from "react-countup";

// Add matching shadow classes for each card
const metrics = [
  {
    title: "Excellence",
    value: "5",
    label: "Years",
    description:
      "Delivering excellence from more than two decades in area of Management & Technology.",
    color: "from-blue-600 to-blue-400",
    shadow: "hover:shadow-blue-400/50",
  },
  {
    title: "Courses",
    value: "5",
    label: "Courses",
    description:
      "A wide range of professional courses to fulfill the industry human resource requirement.",
    color: "from-yellow-400 to-yellow-300",
    shadow: "hover:shadow-yellow-300/50",
  },
  {
    title: "Faculty",
    value: "2",
    label: "Members",
    description:
      "A team of well qualified staff who is updated with latest technology and skills.",
    color: "from-cyan-400 to-cyan-300",
    shadow: "hover:shadow-cyan-400/50",
  },
  {
    title: "Placements",
    value: "350",
    label: "Jobs",
    description:
      "We take pride in our campus placement record, with students securing positions in numerous prestigious companies both in India and internationally.",
    color: "from-green-600 to-green-400",
    shadow: "hover:shadow-green-400/50",
  },
  {
    title: "Students",
    value: "1000",
    label: "Students",
    description:
      "Our student strength witness our excellence and performance in education sector.",
    color: "from-gray-600 to-gray-400",
    shadow: "hover:shadow-gray-400/50",
  },
  {
    title: "Scholarships",
    value: "10",
    label: "Scholarships",
    description:
      "Offering more than ten types of the scholarships to the eligible students.",
    color: "from-rose-500 to-pink-400",
    shadow: "hover:shadow-pink-400/50",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-12 uppercase tracking-wide text-slate-700">
        <span className="text-green-500">CIHS</span> Highlights
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {metrics.map((item, i) => (
          <div
            key={i}
            className={`rounded-3xl overflow-hidden shadow-md bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 ${item.shadow}`}
          >
            {/* Colored Header */}
            <div
              className={`bg-gradient-to-r ${item.color} text-white px-6 py-4 text-center text-lg font-semibold`}
            >
              {item.title}
            </div>

            {/* Metric */}
            <div className="p-6 text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">
                <CountUp end={parseInt(item.value)} duration={2} suffix="+" />
                <span className="ml-1 text-xl text-gray-500">{item.label}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
