import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DumbbellImg from "../../assets/image3.png";
import bg1 from "../../assets/first.jpeg";
import bg2 from "../../assets/safety6.webp";
import bg3 from "../../assets/cihs10.jpg";
import { Link } from "react-router-dom";

const prompts = [
  "A Safety Officer plays a vital role in creating a safe compliant environment.",
  "Safety Officers identify risks and prevent workplace hazards effectively.",
  "Creating a culture of safety starts with responsible leadership.",
  "Protecting people and property through preventive measures.",
  "Ensuring compliance, safety, and risk management every day.",
];

const highlightKeywords = [
  "safety",
  "compliant",
  "risk",
  "Protecting",
  "hazards",
  "leadership",
  "prevention",
  "compliance",
];

const bgImages = [bg1, bg2, bg3];

const HeroSection = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const promptInterval = setInterval(() => {
      setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
    }, 5000);
    return () => clearInterval(promptInterval);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImages[bgIndex]})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-20 text-center md:text-left z-10">
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <div className="min-h-[130px] md:h-[130px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPromptIndex}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
                style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
              >
                {prompts[currentPromptIndex].split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={`${
                      highlightKeywords.some((k) =>
                        word.toLowerCase().includes(k.toLowerCase())
                      )
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p
            className="text-gray-200 text-base md:text-lg mb-8 max-w-md"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
          >
            Understanding{" "}
            <span className="text-green-400">safety protocols minimizes risks</span>{" "}
            and improves efficiency. Enroll now to strengthen your safety foundation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link to={"/programs/Contact"}>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-500 transition duration-300">
                Enquiry Now
              </button>
            </Link>

            <a
              href="https://www.champaransafetybysahilkhan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition duration-300">
                Sahil's Portfolio
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-10"
          >
            <img
              src={DumbbellImg}
              alt="Safety"
              className="w-[220px] sm:w-[280px] md:w-[440px] object-contain"
            />
            <div className="absolute top-6 left-6 w-52 h-52 bg-green-300 rounded-full blur-3xl opacity-40 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
