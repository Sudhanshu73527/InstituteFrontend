import React from "react";
import { Users, ClipboardList, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Expert Safety Mentorship",
    content:
      "Receive guidance from seasoned safety professionals to excel in your career with practical insights and industry know-how.",
    icon: <Users className="w-14 h-14 text-gradient-to-r from-green-500 to-emerald-500" />,
    colorFrom: "from-green-200",
    colorTo: "to-green-100",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(22,163,74,0.4)]",
    borderColor: "border-t-4 border-green-500",
  },
  {
    title: "Certification & Compliance",
    content:
      "Master industrial safety regulations, documentation, and earn key certifications like NEBOSH, IOSH, and ISO standards.",
    icon: <ClipboardList className="w-14 h-14 text-gradient-to-r from-blue-500 to-indigo-500" />,
    colorFrom: "from-blue-200",
    colorTo: "to-blue-100",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]",
    borderColor: "border-t-4 border-blue-500",
  },
  {
    title: "Advanced Risk Management",
    content:
      "Learn to identify hazards, assess risks, and plan emergency responses to maintain a safe and compliant workplace.",
    icon: <ShieldCheck className="w-14 h-14 text-gradient-to-r from-purple-500 to-pink-500" />,
    colorFrom: "from-purple-200",
    colorTo: "to-purple-100",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)]",
    borderColor: "border-t-4 border-purple-500",
  },
];

const InfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-4 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 uppercase">
          Our Key <span className="text-green-500">Offerings</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Empower your industrial safety career with expert mentorship, hands-on training, and globally recognized certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.colorFrom} ${card.colorTo} ${card.borderColor} rounded-4xl shadow-lg p-10 text-center transform transition-all duration-500 hover:-translate-y-2 ${card.hoverShadow}`}
          >
            <div className="mb-6 flex justify-center">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4 uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
