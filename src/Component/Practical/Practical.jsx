import React from "react";
import image1 from "../../assets/shal7.jpeg";
import image2 from "../../assets/shal10.jpeg";
import image3 from "../../assets/shal8.jpeg";

const practicals = [
  {
    id: 1,
    title: "Fire Safety Training",
    description: "Hands-on fire safety and extinguisher training session.",
    date: "2025-04-15",
    image: image1,
  },
  {
    id: 2,
    title: "Electrical Safety Workshop",
    description: "Practical workshop on electrical hazard prevention.",
    date: "2025-03-10",
    image: image2,
  },
  {
    id: 3,
    title: "Industrial Safety Drill",
    description: "Emergency evacuation and industrial safety drill practice.",
    date: "2025-02-20",
    image: image3,
  },
];

const Practical = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-500 mb-6">
        Practical Training Solutions
      </h2>

      {/* 👇 Prompt/Intro Text */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-600 text-lg">
          At <strong className="text-purple-600">CIHS</strong>, we believe in learning by doing practical. Our hands-on practical training sessions are
          designed to:
        </p>
      </div>

      {/* 👇 Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {practicals.map(({ id, title, description, date, image }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
          >
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-500 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Practical;
