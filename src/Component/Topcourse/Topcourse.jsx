// src/components/TopCourses.jsx
import React from "react";
import { Star } from "lucide-react";
import image from "../../assets/python.jpg";
import image1 from "../../assets/shal3.jpeg"
const courses = [
  {
    id: 1,
    title: "Diploma in Fire and Industrial Safety (One Year) ",
    author: "CIHS",
    rating: 4.5,
    reviews: 5,
    price: "38,000/",
    image: image,
  },
  {
    id: 2,
    title: "IOSH ",
    author: "CIHS",
    rating: 4,
    reviews: 5,
    price: "10,000/",
    image: image1,
  },
  {
    id: 3,
    title: "ADIS & PDIS ",
    author: "CIHS",
    rating: 5,
    reviews: 1,
    price: "",
    image: image,
  },
 
  {
    id: 4,
    title: "Safty course",
    author: "CIHS",
    rating: 4,
    reviews: 3,
    price: "35000",
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

const TopCourses = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-2">
        Course Atchis
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-yellow-300 rounded-lg overflow-hidden bg-white shadow-sm text-left"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-42 object-cover"
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
      </div>

      <button className="mt-10 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md font-medium">
        Show all courses
      </button>
    </section>
  );
};

export default TopCourses;
