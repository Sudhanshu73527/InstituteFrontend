import React from "react";
import { motion } from "framer-motion";

// Dynamic data
const data = {
  vision: {
    title: "Our Vision",
    description:
      "To be a globally recognized institute in the field of fire and industrial safety education, empowering students with excellence, innovation, and leadership.",
    icon: "🌟",
  },
  mission: {
    title: "Our Mission",
    description:
      "To provide high-quality safety education and hands-on training, foster critical thinking, and produce professionals who contribute effectively to the safety industry and society.",
    icon: "🎯",
  },
};

const Visionmission = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-500 mb-12">
        Vision & Mission
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-l-8 border-orange-500 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4 flex justify-center md:justify-start">
            {data.vision.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            {data.vision.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {data.vision.description}
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-l-8 border-blue-500 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4 flex justify-center md:justify-start">
            {data.mission.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            {data.mission.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {data.mission.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Visionmission;
