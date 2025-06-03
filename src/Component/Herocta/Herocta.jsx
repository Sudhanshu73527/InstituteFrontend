import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroCTA = ({
  heading = "Learn anything, anytime with CIHS",
  description = "Get globally recognized safety training, practical skills, and guaranteed placement assistance. Start your journey to becoming a certified safety officer today!",
  primaryBtnText = "Get Started",
  primaryBtnLink = "#",
  secondaryBtnText = "Learn More",
  secondaryBtnLink = "#"
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-100 via-white to-purple-100 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
          {heading}
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryBtnLink}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
          >
            {primaryBtnText}
          </a>

          <a
            href={secondaryBtnLink}
            className="flex items-center gap-2 text-green-800 font-medium hover:underline transition-all duration-200"
          >
            {secondaryBtnText} <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
