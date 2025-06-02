import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpenCheck, FileText } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const cards = [
  {
    title: "Mentorship",
    content:
      "Guidance through every stage of your PhD journey, breaking complex tasks into clear steps and keeping you motivated throughout.",
    icon: <Users className="w-12 h-12 text-green-600" />,
    colorFrom: "from-green-100",
    colorTo: "to-red-100",
  },
  {
    title: "Course Selection",
    content:
      "Select impactful research topics aligned with your goals, laying a strong foundation for academic success.",
    icon: <BookOpenCheck className="w-12 h-12 text-green-600" />,
    colorFrom: "from-blue-100",
    colorTo: "to-orange-100",
  },
  {
    title: "Research Guidance",
    content:
      "Clear direction on research structuring—proposals, synopses, and beyond—so your work is well-organized and professional.",
    icon: <FileText className="w-12 h-12 text-green-600" />,
    colorFrom: "from-yellow-100",
    colorTo: "to-purple-100",
  },
];

const InfoSection = () => {
  return (
    <div className="bg-green-200 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 uppercase">Our Key Offerings</h2>
        <p className="text-gray-600 text-lg mt-3">
          Explore how we support your academic and professional journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className={`bg-gradient-to-br ${card.colorFrom} ${card.colorTo} rounded-3xl shadow-md p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="mb-4 flex justify-center">{card.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-3 uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-sm text-gray-700">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
