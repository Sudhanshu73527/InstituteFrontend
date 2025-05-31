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

const TrustedCompanies = () => {
  return (
    <section className="py-10 bg-white text-center">
      <p className="text-slate-500 font-semibold text-3xl mb-8">
        Trusted by learners from
      </p>
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6">
        {logos.map((logo, index) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-10 object-contain cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
