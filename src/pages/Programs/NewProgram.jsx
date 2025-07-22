import React from 'react';

const NewProgram = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-green-50 to-white px-4 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
        New Course Coming Soon
      </h2>
      <p className="text-gray-600 text-lg max-w-xl mb-6">
        We’re finalizing our latest safety course designed to elevate your professional skillset. Stay tuned for complete course details, globally recognized certifications, and enrollment instructions.
      </p>

      {/* Professional "Coming Soon" GIF */}
      <img
        src="https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif"
        alt="Coming Soon"
        className="w-72 h-72 object-contain rounded-lg shadow-lg mb-4"
      />

      <span className="mt-2 text-sm text-gray-500 italic">
        🚧 Launching Professionally Soon! 🚀
      </span>
    </div>
  );
};

export default NewProgram;
