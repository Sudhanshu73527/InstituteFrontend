import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
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
  { id: 1, title: "Safety Course", author: "CIHS", rating: 3, reviews: 5, price: "₹35,000", image: image1 },
  { id: 2, title: "Safety Course", author: "CIHS", rating: 4, reviews: 5, price: "₹35,000", image: image2 },
  { id: 3, title: "Safety Course", author: "CIHS", rating: 5, reviews: 1, price: "₹35,000", image: image3 },
  { id: 4, title: "Safety Course", author: "CIHS", rating: 4, reviews: 3, price: "₹35,000", image: image4 },
  { id: 5, title: "Safety Course", author: "CIHS", rating: 4, reviews: 3, price: "₹35,000", image: image5 },
  { id: 6, title: "Safety Course", author: "CIHS", rating: 4, reviews: 3, price: "₹35,000", image: image6 },
  { id: 7, title: "Safety Course", author: "CIHS", rating: 4, reviews: 3, price: "₹35,000", image: image7 },
  { id: 8, title: "Safety Course", author: "CIHS", rating: 4, reviews: 3, price: "₹35,000", image: image8 },
];

// ⭐ StarRating component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-red-500 fill-red-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPage, isHovered]);

  const paginatedCards = cardData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div
      className="w-full max-w-6xl mx-auto p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {paginatedCards.map((course) => (
          <div
            key={course.id}
            className="border border-yellow-300 rounded-lg overflow-hidden bg-white shadow-sm text-left transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-base">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{course.author}</p>
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-2">
                <StarRating rating={course.rating} />
                <span className="text-gray-500">({course.reviews})</span>
              </div>
              <p className="text-md font-semibold">{course.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 border-2 ${
              currentPage === index
                ? "bg-blue-600 border-blue-600"
                : "bg-white border-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginatedCarousel;