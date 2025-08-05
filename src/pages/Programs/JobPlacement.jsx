import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images from your assets folder
import image1 from "../../assets/place1.jpeg";
import image2 from "../../assets/place2.jpeg";
import image3 from "../../assets/place3.jpeg";
import image4 from "../../assets/place4.jpeg";
import image5 from "../../assets/place5.jpeg";
import image6 from "../../assets/place6.jpeg";
import image7 from "../../assets/place7.jpeg";
import image8 from "../../assets/place8.jpeg";
import image9 from "../../assets/place9.jpeg";
import image10 from "../../assets/place10.jpeg";
import image11 from "../../assets/place11.jpeg";
import image12 from "../../assets/place12.jpeg";
import image13 from "../../assets/place13.jpeg";
import image14 from "../../assets/place14.jpeg";
import image15 from "../../assets/place15.jpeg";

// ✅ Place them in an array
const placementImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const JobPlacement = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center bg-gradient-to-b from-orange-50 via-white to-orange-100 rounded-xl shadow-lg">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6 tracking-tight drop-shadow">
         Job Placement History
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Explore some of our proud student placement moments across top industries and organizations.
      </p>

      <button
        onClick={() => setShowGallery(!showGallery)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
      >
        {showGallery ? "Hide Placements" : "View Placement Gallery"}
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

export default JobPlacement;
