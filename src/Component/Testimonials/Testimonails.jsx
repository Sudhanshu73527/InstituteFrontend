import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Sahil Bhaiya",
    position: "",
    rating: 4.5,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sudhanshu",
    position: "",
    rating: 4,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sunny",
    position: "",
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
      stars.push(
        <FaStar
          key={i}
          className="text-yellow-400 transition-colors duration-300"
          aria-label="Full star"
        />
      );
    } else if (rating - i >= 0.5) {
      stars.push(
        <FaStarHalfAlt
          key={i}
          className="text-yellow-400 transition-colors duration-300"
          aria-label="Half star"
        />
      );
    } else {
      stars.push(
        <FaRegStar
          key={i}
          className="text-yellow-300 transition-colors duration-300"
          aria-label="Empty star"
        />
      );
    }
    i++;
  }
  return stars;
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        What Our Students Say About Us
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-500 flex flex-col"
            tabIndex={0}
            aria-label={`Testimonial from ${t.name}, ${t.position}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.image}
                alt={`Photo of ${t.name}`}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-yellow-400 transition-transform duration-500 group-hover:scale-110"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.position}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4" aria-label={`Rating: ${t.rating} out of 5 stars`}>
              {getStars(t.rating)}
            </div>

            <p className="text-gray-700 text-base mb-6 flex-grow">{t.review}</p>

            <a
              href="#"
              className="inline-flex items-center text-yellow-600 font-semibold text-sm hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              Read more <FiArrowRight className="ml-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
