import React from "react";
import image1 from "../../assets/shal7.jpeg"
import image2 from "../../assets/shal9.jpeg"
import image3 from "../../assets/shal8.jpeg"

// Sample data for practical trainings
const practicals = [
  {
    id: 1,
    title: "Fire Safety Training",
    description: "Hands-on fire safety and extinguisher training session.",
    date: "2025-04-15",
    image: image1,
  },
  {
    id: 2,
    title: "Electrical Safety Workshop",
    description: "Practical workshop on electrical hazard prevention.",
    date: "2025-03-10",
    image: image2,
  },
  {
    id: 3,
    title: "Industrial Safety Drill",
    description: "Emergency evacuation and industrial safety drill practice.",
    date: "2025-02-20",
    image: image3,
  },
];

const Practical = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Practical Training Solutions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {practicals.map(({ id, title, description, date, image }) => (
          <div key={id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-3">{description}</p>
              <p className="text-sm text-gray-500 italic">Date: {new Date(date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Practical;
