// src/components/HeroCTA.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroCTA = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Learn anything, anytime
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-800 transition">
          Get started
        </button>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-900 font-medium hover:underline"
        >
          Learn more <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroCTA;
