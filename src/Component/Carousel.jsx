import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import image1 from "../assets/shal3.jpeg";
import image2 from "../assets/shal2.jpeg";
import image3 from "../assets/shal4.jpeg";
import image4 from "../assets/shal5.jpeg";

const cardData = [
  { id: 1, title: "Industrial Safety", author: "CIHS", image: image1 },
  { id: 2, title: "Fire Safety", author: "CIHS", image: image2 },
  { id: 3, title: "Construction Safety", author: "CIHS", image: image3 },
  { id: 4, title: "Electrical Safety", author: "CIHS", image: image4 },
];

const PaginatedCarousel = () => {
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => nextPage(), 4000);
    return () => clearInterval(interval);
  }, [currentPage, isHovered]);

  const paginatedCards = cardData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-6 py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-3xl shadow-inner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={prevPage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-green-600 hover:text-white transition"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatePresence mode="wait">
          {paginatedCards.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500">{course.author}</p>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-400 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition"
                >
                  Learn More
                </motion.button> */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextPage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-green-600 hover:text-white transition"
      >
        <ArrowRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentPage(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-4 h-4 rounded-full ${
              currentPage === index
                ? "bg-gradient-to-r from-green-500 to-emerald-400 shadow-md scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginatedCarousel;
