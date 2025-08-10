import React from "react";
import { motion } from "framer-motion";

import iso9001 from "../../assets/iso.jpeg";
import iso14001 from "../../assets/iso1.jpeg";
import iso45001 from "../../assets/iso4.jpeg";
import mca from "../../assets/iso3.jpeg";
import msme from "../../assets/iso2.jpeg";

const certifications = [
  { img: iso9001, title: "ISO 9001:2015" },
  { img: iso14001, title: "ISO 14001:2015" },
  { img: iso45001, title: "ISO 45001" },
  { img: mca, title: "Ministry of Corporate Affairs" },
  { img: msme, title: "MSME" },
];

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-10 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Certifications & Accreditations
        </motion.h2>

        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <motion.div
          className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-x-auto md:overflow-hidden pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-60 md:w-auto flex flex-col items-center bg-white p-5 rounded-2xl shadow-lg border border-gray-100 cursor-pointer
                         hover:shadow-green-200 hover:-translate-y-2 transition-all duration-300 snap-center"
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="h-16 md:h-20 object-contain mb-3"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-gray-700 font-medium text-center text-sm md:text-base">
                {cert.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
