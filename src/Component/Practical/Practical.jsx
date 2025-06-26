import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/shal7.jpeg";
import image2 from "../../assets/shal10.jpeg";
import image3 from "../../assets/shal8.jpeg";

// Card data
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

// Shadow colors
const baseShadowColors = [
  "shadow-purple-200",
  "shadow-purple-200",
  "shadow-purple-200",
];

const hoverShadowColors = [
  "hover:shadow-purple-300/90",
  "hover:shadow-purple-300/90",
  "hover:shadow-purple-300/90",
];

const Practical = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-slate-700 mb-4">
        Practical Training Solutions
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        At <span className="text-purple-600 font-semibold">CIHS</span>, we believe in the power of hands-on learning. Our training sessions provide real-world exposure in safe and engaging environments.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {practicals.map(({ id, title, description, date, image }, idx) => {
          const baseColor = baseShadowColors[idx % baseShadowColors.length];
          const hoverColor = hoverShadowColors[idx % hoverShadowColors.length];

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
              className={`relative bg-white/40 backdrop-blur-md ${baseColor} ${hoverColor} shadow-xl rounded-2xl overflow-hidden group transition duration-700 ease-in-out hover:scale-[1.015] border border-gray-100 hover:shadow-2xl`}
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {new Date(date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-700 mb-2 group-hover:text-purple-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Practical;
