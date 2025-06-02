import React from "react";
import { motion } from "framer-motion";
import microsoft from "../../assets/microsoft.png";
import walmart from "../../assets/walmart.png";
import accenture from "../../assets/accenture.png";
import adobe from "../../assets/adobe.png";
import paypal from "../../assets/paypal.png";

const logos = [
  { src: microsoft, alt: "Microsoft" },
  { src: walmart, alt: "Walmart" },
  { src: accenture, alt: "Accenture" },
  { src: adobe, alt: "Adobe" },
  { src: paypal, alt: "PayPal" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const TrustedCompanies = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-green-50 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Trusted by Learners from
      </h2>
      <p className="text-slate-500 mb-10">Top companies across the globe</p>

      <div className="flex justify-center flex-wrap gap-6 px-4 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.alt}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 w-32 h-32 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 hover:border-green-400"
            whileHover={{
              scale: 1.1,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
