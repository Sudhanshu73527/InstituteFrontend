import React from "react";
import CountUp from "react-countup"; // ✅ Import CountUp

const metrics = [
  {
    title: "Excellence",
    value: "5+",
    label: "Years",
    description:
      "Delivering excellence from more than two decades in area of Management & Technology.",
    color: "bg-blue-600",
  },
  {
    title: "Courses",
    value: "5+",
    label: "Courses",
    description:
      "A wide range of professional courses to fulfill the industry human resource requirement.",
    color: "bg-yellow-400",
  },
  {
    title: "Faculty",
    value: "2+",
    label: "Members",
    description:
      "A team of well qualified staff who is updated with latest technology and skills.",
    color: "bg-cyan-400",
  },
  {
    title: "Placements",
    value: "350+",
    label: "Jobs",
    description:
      "Many of our students got campus placement in companies like Amazon, Nagarro, Dell & Wipro etc.",
    color: "bg-green-600",
  },
  {
    title: "Students",
    value: "1000+",
    label: "Students",
    description:
      "Our student strength witness our excellence and performance in education sector.",
    color: "bg-gray-600",
  },
  {
    title: "Scholarships",
    value: "10+",
    label: "Scholarships",
    description:
      "Offering more than ten types of the scholarships to the eligible students.",
    color: "bg-rose-500",
  },
];

const Highlights = () => {
  return (
    <section className="py-16 px-4 bg-green-100">
      <h1 className="text-3xl font-bold text-center uppercase">
        <strong className="text-green-500">CIHS</strong> Highlights
      </h1>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {metrics.map((item, i) => (
          <div key={i} className="border rounded-md shadow-sm overflow-hidden">
            <div className={`${item.color} text-white px-4 py-2 text-sm font-semibold`}>
              {item.title}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                <CountUp
                  end={parseInt(item.value)}
                  duration={2}
                  suffix="+"
                />
                <span className="text-lg font-semibold"> {item.label}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
