import React from "react";
import { blogData } from "../../Mockdata/blogData";
import { motion } from "framer-motion";

// Shadow colors for both base and hover
const hoverShadowColors = [
  "hover:shadow-green-400/60",
  "hover:shadow-purple-400/60",
  "hover:shadow-blue-400/60",
  "hover:shadow-yellow-400/60",
  "hover:shadow-pink-400/60",
  "hover:shadow-rose-400/60",
];

const baseShadowColors = [
  "shadow-green-200",
  "shadow-purple-200",
  "shadow-blue-200",
  "shadow-yellow-200",
  "shadow-pink-200",
  "shadow-rose-200",
];

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-green-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-green-700 relative inline-block">
            Latest from Our Blog
            <span className="block w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Stay updated with the latest articles and insights from CIHS Institute. Curated with expert knowledge.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post, index) => {
            const hoverColor = hoverShadowColors[index % hoverShadowColors.length];
            const baseColor = baseShadowColors[index % baseShadowColors.length];

            return (
              <motion.div
                key={post.id}
                className={`bg-white rounded-xl overflow-hidden ${baseColor} shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-xl ${hoverColor}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto sm:h-64 md:h-52 lg:h-56 object-contain sm:object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
