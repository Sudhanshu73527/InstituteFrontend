import React from "react";
import { Star } from "lucide-react";
import image from "../../assets/python.jpg";
import image1 from "../../assets/shal3.jpeg";
import PaginatedCarousel from "../caresoul";

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
      {/* New Placement-Focused Heading and Prompt */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-2 uppercase">
       Placement History At Cihs
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Our industry-aligned courses are carefully curated to ensure you don’t just learn — you get placed. With 100% placement assurance, we guide your journey from classroom to career.
      </p>

      {/* Course Cards
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {courses.map((course) => (
    <div
      key={course.id}
      className="border border-yellow-300 rounded-lg overflow-hidden bg-white shadow-sm text-left"
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
          {course.rating}
          <StarRating rating={course.rating} />
          <span className="text-gray-500">({course.reviews})</span>
        </div>
        <p className="text-md font-semibold">{course.price}</p>
      </div>
    </div>
  ))}
</div> */}
<PaginatedCarousel/>

      
    </section>
  );
};

export default Placements;
