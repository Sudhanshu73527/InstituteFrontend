import React from "react";

// Import images
import img1 from "../../assets/shal1.jpeg";
import img2 from "../../assets/shal2.jpeg";
import img3 from "../../assets/shal3.jpeg";
import img4 from "../../assets/shal4.jpeg";
import img5 from "../../assets/shal5.jpeg";
import img6 from "../../assets/shal6.jpeg";
import img7 from "../../assets/shal7.jpeg";
import img8 from "../../assets/shal8.jpeg";
import img9 from "../../assets/shal9.jpeg";
import img10 from "../../assets/shal10.jpeg";

// Images array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Placements = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
      {/* Heading and Prompt */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-green-600">
          100% Placement Guaranteed
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          At CIHS Studies, we take pride in securing the future of our students with 100% placement assurance in reputable organizations across the country.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll gap-6 px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-md ring-2 ring-green-100 transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              <img
                src={src}
                alt={`Placement ${index + 1}`}
                className="w-48 h-48 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-scroll {
              animation-duration: 35s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Placements;
