import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import image1 from "../../assets/image3.png";

const Bannersectiononly = ({
  image = image1,
  heading = "Bihar & Jharkhand's No.1 Safety Officer Institute",
  subheading = "Join CIHS — the most trusted name in safety training.",
  points = [
    "100% Placement Assistance with Industry Partnerships",
    "Real-world Safety Drills & Practical Learning",
    "Certified Trainers with Global Expertise",
    "Government-Recognized Certification Programs",
    "Dedicated Career Guidance and Interview Training",
  ],
}) => {
  return (
    <section className="w-full min-h-[85vh] bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        
        {/* Image Section - Left Side (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <motion.img
            src={image}
            alt="CIHS Institute"
            className="w-full max-w-lg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] object-cover border border-gray-200"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Text Section - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 w-full text-center md:text-left space-y-6"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-green-800 leading-snug"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h2>
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            {subheading}
          </p>

          <div className="space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 text-gray-800"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <CheckCircle className="text-green-600 mt-1 w-6 h-6 flex-shrink-0" />
                <span className="text-base md:text-lg">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition">
              Enroll Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bannersectiononly;
