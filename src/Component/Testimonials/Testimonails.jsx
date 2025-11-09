import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sudhanshu Kumar",
    position: "Safety Officer, Mumbai",
    rating: 4.5,
    review:
      "The Safety Officer training course was incredibly practical. Real-life scenarios, case studies, and expert guidance helped me land my first job within weeks of completion.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sahbaj Khan",
    position: "Trainee, CIHS Institute",
    rating: 4,
    review:
      "CIHS provided me with strong fundamentals in industrial safety. Their personalized mentoring and practical drills made all the difference in my learning journey.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Amit Kumar",
    position: "Fire & Safety Intern",
    rating: 4,
    review:
      "The course on safety risk management was very informative. I especially appreciated the hands-on training and live fire drills which built my confidence.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const getStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating - i >= 1)
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (rating - i >= 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-300" />);
  }
  return stars;
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_70%)]" />

      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800"
        >
          What Our Students{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Say About Us
          </span>
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-base md:text-lg">
          Real success stories from our learners who transformed their careers
          through CIHS’s hands-on safety programs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {testimonials.map((t, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.15)] transition-all duration-500 p-8 flex flex-col text-center"
          >
            {/* Floating Avatar */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <div className="flex justify-center mb-3">{getStars(t.rating)}</div>
              <p className="text-gray-700 text-base leading-relaxed italic mb-6">
                “{t.review}”
              </p>
              <h3 className="font-semibold text-lg text-gray-900">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.position}</p>
            </div>

            {/* Subtle gradient line */}
            <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
