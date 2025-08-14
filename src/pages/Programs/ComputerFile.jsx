import React, { useState } from "react";
import { motion } from "framer-motion";

// Import your images from assets
import img1 from "../../assets/labb1.jpeg";
import img2 from "../../assets/labb2.jpeg";
import img3 from "../../assets/labb3.jpeg";
import img4 from "../../assets/labb4.jpeg";

const images = [img1, img2, img3, img4];

const ComputerFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 mb-4"
        >
          Our Computer Lab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Our state-of-the-art computer lab is equipped with the latest
          technology to help students learn, explore, and innovate in the
          digital world.
        </motion.p>

        {/* Images Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Computer Lab ${index + 1}`}
                className="w-full h-56 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                View
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged Lab"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[80%] max-w-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default ComputerFile;
