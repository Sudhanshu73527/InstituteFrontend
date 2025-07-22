import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feeImage from "../../assets/fee.jpeg";
import { Link } from "react-router-dom";

const feeDetails = [
  {
    icon: "💼",
    title: "Diploma in Fire & Industrial Safety",
    amount: "₹35,000",
    note: "One Time",
  },
  {
    icon: "🧑‍🏫",
    title: "IOSH (Managing Safely)",
    amount: "₹10,000",
    note: "One Time",
  },
  {
    icon: "🏠",
    title: "Hostel Fee",
    amount: "₹5,000/month",
    note: "Including food & accommodation",
  },
  {
    icon: "📘",
    title: "Registration Fee",
    amount: "₹1,000",
    note: "Non-refundable",
  },
  {
    icon: "🎓",
    title: "Certification Charges",
    amount: "Included",
    note: "In course fee",
  },
];

function PopularProgram() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-14 relative z-10">
      <h2 className="text-4xl font-extrabold text-center text-slate-600 mb-10">
        Fee Structure at CIHS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.img
          src={feeImage}
          alt="CIHS Fee Structure"
          className="rounded-3xl shadow-2xl w-full cursor-pointer"
          onClick={() => setShowModal(true)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Fee Details */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-xl border"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Program & Hostel Fees
          </h3>

          <ul className="space-y-5">
            {feeDetails.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    <strong>{item.amount}</strong>{" "}
                    {item.note && <span>- {item.note}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
          <Link to={"/programs/Contact"}>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 text-center">
              Enroll Now
            </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.img
              src={feeImage}
              alt="Zoomed Fee Structure"
              className="max-w-3xl max-h-[90vh] rounded-xl shadow-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PopularProgram;
