// src/components/Testimonials.jsx
import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Sahil Bhaiya",
    position: "SWE 1 @ Amazon",
    rating: 4.5,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sudhanshu",
    position: "SWE 2 @ Samsung",
    rating: 4,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sunny",
    position: "SWE 2 @ Google",
    rating: 4,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  
];

const getStars = (rating) => {
  const stars = [];
  let i = 0;
  while (i < 5) {
    if (rating - i >= 1) {
      stars.push(<FaStar key={i} className="text-red-500" />);
    } else if (rating - i >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-red-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-red-500" />);
    }
    i++;
  }
  return stars;
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-2 text-slate-500">What Students's say's about us</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-slate-900">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives and.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-start text-left border border-green-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.position}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">{getStars(t.rating)}</div>
            <p className="text-sm text-gray-900 mb-4">{t.review}</p>
            <a href="#" className="text-blue-600 font-medium text-sm hover:underline mt-auto">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
