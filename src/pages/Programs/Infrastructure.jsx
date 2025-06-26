import React from "react";
import { motion } from "framer-motion";

// Sample images – replace these paths with your actual assets
import buildingImg from "../../assets/shal1.jpeg";
import receptionImg from "../../assets/shal2.jpeg";
import labImg from "../../assets/shal3.jpeg";
import corridorImg from "../../assets/shal4.jpeg";

// Dynamic infrastructure data
const infrastructureData = [
  {
    title: "Main Institute Building",
    description:
      "A well-structured campus building equipped with modern facilities, classrooms, administrative blocks, and fire safety labs.",
    image: buildingImg,
  },
  {
    title: "Reception Area",
    description:
      "A welcoming reception space for student queries, admissions, and administration, designed with comfort and accessibility in mind.",
    image: receptionImg,
  },
  {
    title: "Safety Labs & Practicals Zone",
    description:
      "Hands-on training area with real fire safety equipment, protective gear, and tools for interactive safety drills.",
    image: labImg,
  },
  {
    title: "Spacious Corridors",
    description:
      "Clean and ventilated corridors for smooth navigation across classrooms, admin blocks, and labs.",
    image: corridorImg,
  },
];

const Infrastructure = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
        Our Infrastructure
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        CIHS offers a state-of-the-art infrastructure designed to provide
        students with an immersive and safe learning environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {infrastructureData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
