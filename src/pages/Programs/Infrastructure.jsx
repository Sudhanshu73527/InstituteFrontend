import React from "react";
import { motion } from "framer-motion";

// Sample images – replace with your own
import buildingImg from "../../assets/mock7.jpeg";
import receptionImg from "../../assets/infra2.jpeg";
import labImg from "../../assets/infra3.jpeg";
import corridorImg from "../../assets/infra4.jpeg";
import image1 from "../../assets/infra5.jpeg"
import image2 from "../../assets/infra6.jpeg"
import image3 from "../../assets/mock6.jpeg"

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
   {
    title: "Class Room Area",
    description:
      "Clean and ventilated corridors for smooth navigation across classrooms, admin blocks, and labs.",
    image: image1,
  }, {
    title: "Practical Room",
    description:
      "Clean and ventilated corridors for smooth navigation across classrooms, admin blocks, and labs.",
    image: image2,
  }, {
    title: "Computer Lab Area",
    description:
      "Clean and ventilated corridors for smooth navigation across classrooms, admin blocks, and labs.",
    image: image3,
  }
];

const Infrastructure = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">
          Our Infrastructure
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          CIHS offers state-of-the-art infrastructure designed to provide
          students with an immersive and safe learning environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {infrastructureData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
