import React from "react";
import heroBg from "../../assets/safty1.png"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-70"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-3xl">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Personalized Mentorship, Expert Guidance, and Complete<br />
          Support for Aspiring and Pursuing PhD Students.
        </h1>

        {/* Search Input */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for your research topic or area of interest..."
            className="w-full max-w-xl px-5 py-3 rounded-full text-sm md:text-base shadow-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
