import React from "react";
import PaginatedCarousel from "../Carousel";
import { Star } from "lucide-react";
import image from "../../assets/python.jpg";
import image1 from "../../assets/shal3.jpeg";

const courses = [
  {
    id: 1,
    title: "Safety Course",
    author: "CIHS",
    rating: 3,
    reviews: 5,
    price: "₹35,000",
    image: image1,
  },
  {
    id: 2,
    title: "Safety Course",
    author: "CIHS",
    rating: 4,
    reviews: 5,
    price: "₹35,000",
    image: image,
  },
  {
    id: 3,
    title: "Safety Course",
    author: "CIHS",
    rating: 5,
    reviews: 1,
    price: "₹35,000",
    image: image,
  },
  {
    id: 4,
    title: "Safety Course",
    author: "CIHS",
    rating: 4,
    reviews: 3,
    price: "₹35,000",
    image: image,
  },
];

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

const Placements = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-2 uppercase">
        Placement History <span className="text-green-500">At CIHS</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Our industry-aligned courses are carefully curated to ensure you don’t just learn — you get placed. With 100% placement assurance, we guide your journey from classroom to career.
      </p>

      {/* Carousel Component */}
      <PaginatedCarousel />
    </section>
  );
};

export default Placements;