import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const InfoSection = () => {
  const cards = [
    {
      title: "MENTORSHIP",
      content:
        "Our mentors guide you through every phase of your PhD journey, breaking down complex steps into manageable tasks and keeping you motivated to achieve your goals.",
    },
    {
      title: "COURSE SELECTION",
      content:
        "We help you choose a meaningful and impactful research topic that aligns with your goals and sets the foundation for a successful PhD journey.",
    },
    {
      title: "RESEARCH GUIDANCE",
      content:
        "We provide clear guidance on structuring your research documents—proposals, synopses, and more—so you stay organized and present your work professionally.",
    },
  ];

  return (
    <div className="bg-green-500 py-12 px-4 md:px-16">
      {/* Heading and Subheading */}
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl font-bold uppercase">Our Key Offerings</h2>
        <p className="text-md mt-2">
          Explore how we support your academic and professional journey.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-black">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-slate-300 border border-white"
          >
            <h2 className="text-lg font-semibold mb-4 uppercase">{card.title}</h2>
            <p>{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
