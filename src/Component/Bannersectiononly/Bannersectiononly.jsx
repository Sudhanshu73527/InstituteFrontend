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
    <section className="w-full min-h-[80vh] bg-gradient-to-br from-white to-slate-100 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:flex-row-reverse">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <img
            src={image}
            alt="CIHS Institute"
            className="w-full max-w-md mx-auto md:mx-0 rounded-2xl shadow-2xl object-cover border border-gray-200"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-700">{heading}</h2>
          <p className="text-gray-700 text-lg">{subheading}</p>

          <div className="space-y-3">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-800">
                <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                <span className="text-base">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bannersectiononly;
