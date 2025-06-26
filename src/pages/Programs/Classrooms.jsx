import React from "react";
import { motion } from "framer-motion";

// Sample classroom images (replace with your actual paths)
import img1 from "../../assets/sahil1.png";
import img2 from "../../assets/shal2.jpeg";
import img3 from "../../assets/shal3.jpeg";
import img4 from "../../assets/shal3.jpeg";

// Dynamic data for classrooms
const classroomContent = {
  title: "Our Classrooms",
  description:
    "CIHS classrooms are designed to foster focus, collaboration, and real-world learning. Equipped with modern safety tools and comfortable seating, our learning spaces inspire students to excel.",
  images: [
    { id: 1, src: img1, alt: "Modern classroom setup" },
    { id: 2, src: img2, alt: "Hands-on safety training room" },
    { id: 3, src: img3, alt: "Lecture in progress" },
    { id: 4, src: img4, alt: "Well-ventilated classroom"},
  ],
};

const Classrooms = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-600 mb-6">
        {classroomContent.title}
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        {classroomContent.description}
      </p>

      {/* Classroom Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classroomContent.images.map((img, index) => (
          <motion.div
            key={img.id}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classrooms;
