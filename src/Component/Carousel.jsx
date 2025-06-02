import React, { useEffect, useState } from "react";
import image1 from "../assets/shal3.jpeg";
import image2 from "../assets/shal2.jpeg";
import image3 from "../assets/shal4.jpeg";
import image4 from "../assets/shal5.jpeg";
import image5 from "../assets/shal6.jpeg";
import image6 from "../assets/shal7.jpeg";
import image7 from "../assets/shal8.jpeg";
import image8 from "../assets/shal9.jpeg";

// Course data
const cardData = [
  { id: 1, title: "Industrial Safety", author: "CIHS", image: image1 },
  { id: 2, title: "Fire Safety", author: "CIHS", image: image2 },
  { id: 3, title: "Construction Safety", author: "CIHS", image: image3 },
  { id: 4, title: "Electrical Safety", author: "CIHS", image: image4 },
  { id: 5, title: "Chemical Safety", author: "CIHS", image: image5 },
  { id: 6, title: "Workplace Safety", author: "CIHS", image: image6 },
  { id: 7, title: "Safety Audit", author: "CIHS", image: image7 },
  { id: 8, title: "Fire & Rescue", author: "CIHS", image: image8 },
];

const PaginatedCarousel = () => {
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);

  const nextPage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextPage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPage, isHovered]);

  const paginatedCards = cardData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {paginatedCards.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500">{course.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 border-2 ${
              currentPage === index
                ? "bg-green-600 border-green-600"
                : "bg-white border-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginatedCarousel;
