import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What safety courses do you offer?",
    answer:
      "We offer a wide range of safety courses including Fire & Industrial Safety, IOSH, OSHA 30-Hour, ADIS & PDIS. Each course is designed to provide in-depth practical and theoretical knowledge to ensure job readiness.",
  },
  {
    question: "Are the safety courses government-approved?",
    answer:
      "Yes, most of our safety courses such as ADIS and PDIS are government-approved and meet industrial standards both in India and abroad.",
  },
  {
    question: "Do you offer placement assistance after completing a safety course?",
    answer:
      "Absolutely! We provide 100% placement assistance with reputed organizations. Our training programs include resume building, mock interviews, and direct referrals.",
  },
  {
    question: "Can I take safety courses online or are they classroom-only?",
    answer:
      "We offer both classroom and online learning options for select safety programs, depending on the course and demand.",
  },
  {
    question: "What is the duration of the safety training programs?",
    answer:
      "Course durations vary depending on the program. Typically, certificate courses range from 1 to 6 months, while diplomas can be 1 to 2 years long.",
  },
];

const Saftyfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 bg-gradient-to-b from-green-100 to-white rounded-xl shadow-inner">
      <h2 className="text-4xl font-extrabold text-center text-green-600 mb-12 uppercase">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-green-700 text-lg transition duration-300 focus:outline-none"
            >
              <span>{faq.question}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Saftyfaq;
