import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DumbbellImg from "../../assets/safty4.png";

const prompts = [
  "A Safety Officer plays a vital role in creating a safe and compliant environment.",
  "Safety Officers identify risks and prevent workplace hazards effectively.",
  "Creating a culture of safety starts with responsible leadership.",
  "Protecting people and property through preventive measures.",
  "Ensuring compliance, safety, and risk management every day.",
];

const HeroSection = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <section className="bg-green-100 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left">
          <div className="h-[130px] overflow-hidden"> {/* Fixed height to prevent jump */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPromptIndex}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6"
              >
                {prompts[currentPromptIndex].split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      word.toLowerCase().includes("safety") || word.toLowerCase().includes("compliant")
                        ? "text-green-500"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md">
            It is a long established fact that a reader will be by readable content of a
            page when are the best product.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
              Book Now
            </button>
            <button className="flex items-center gap-2 text-black font-medium">
              <FaPlay className="text-green-500" /> Watch Now
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center">
          <img
            src={DumbbellImg}
            alt="Safety"
            className="w-[300px] md:w-[500px] z-10"
          />
          {/* <div className="absolute top-4 right-12 bg-white px-3 py-1 rounded shadow text-xs font-semibold text-gray-700"> */}
            {/* <span className="text-orange-500 font-bold">25% Off</span> <span>Gamble</span> */}
          {/* </div> */}
          {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-orange-200 rounded-full z-0 opacity-60"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
