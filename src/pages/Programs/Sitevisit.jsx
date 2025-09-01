import React from "react";
import { motion } from "framer-motion";

// Example images (replace with your real ones in /assets)
import img1 from "../../assets/shal7.jpeg";
import img2 from "../../assets/shal8.jpeg";
import img3 from "../../assets/shal9.jpeg";
import img4 from "../../assets/shal10.jpeg";
import img5 from "../../assets/shal11.jpeg";
// import img6 from "../../assets/site6.jpg";

const images = [img1, img2, img3, img4, img5];

const Sitevisit = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Site Visit Glimpses
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Practical exposure and hands-on training at real industry sites.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <img
                src={src}
                alt={`Site visit ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitevisit;
