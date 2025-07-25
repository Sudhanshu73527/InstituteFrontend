import React from "react";
import { Users, ClipboardList, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Safety Officer Mentorship",
    content:
      "Get one-on-one guidance from experienced professionals to kickstart or advance your safety career with real-world knowledge.",
    icon: <Users className="w-12 h-12 text-green-600" />,
    colorFrom: "from-green-100",
    colorTo: "to-red-100",
    hoverShadow: "hover:shadow-[0_8px_30px_rgba(22,163,74,0.5)]",
    borderColor: "border-t-4 border-green-500",
  },
  {
    title: "Compliance & Certification",
    content:
      "Understand industrial safety laws, documentation, and how to clear safety certifications like NEBOSH, IOSH, and more.",
    icon: <ClipboardList className="w-12 h-12 text-green-600" />,
    colorFrom: "from-blue-100",
    colorTo: "to-orange-100",
    hoverShadow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)]",
    borderColor: "border-t-4 border-orange-500",
  },
  {
    title: "Risk Management Training",
    content:
      "Learn hazard identification, risk assessment, and emergency planning techniques to enhance workplace safety.",
    icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
    colorFrom: "from-yellow-100",
    colorTo: "to-purple-100",
    hoverShadow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)]",
    borderColor: "border-t-4 border-purple-500",
  },
];

const InfoSection = () => {
  return (
    <div className="bg-green-200 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 uppercase">Our Key Offerings</h2>
        <p className="text-gray-600 text-lg mt-3">
          Build a career in industrial safety with professional mentoring and skill-based training.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.colorFrom} ${card.colorTo} ${card.borderColor} rounded-3xl shadow-md p-8 text-center transform transition-all duration-300 hover:-translate-y-1 ${card.hoverShadow}`}
          >
            <div className="mb-4 flex justify-center">{card.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-3 uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-sm text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
