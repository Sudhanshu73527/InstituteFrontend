import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images from your assets folder
import image1 from "../../assets/mock1.jpeg";
import image2 from "../../assets/mock2.jpeg";
import image3 from "../../assets/mock3.jpeg";
import image4 from "../../assets/mock4.jpeg";
import image5 from "../../assets/mock5.jpeg";
import image6 from "../../assets/mock6.jpeg";
import image7 from "../../assets/mock7.jpeg";


// ✅ Place them in an array
const placementImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const MockInterview = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center bg-gradient-to-b from-orange-50 via-white to-orange-100 rounded-xl shadow-lg">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6 tracking-tight drop-shadow">
        See Mock Interview
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Explore some of our proud student placement moments across top industries and organizations.
      </p>

      <button
        onClick={() => setShowGallery(!showGallery)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
      >
        {showGallery ? "Hide Image" : "View Interview Gallery"}
      </button>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {placementImages.map((src, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-xl border border-orange-200"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`Placement ${index + 1}`}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MockInterview;
