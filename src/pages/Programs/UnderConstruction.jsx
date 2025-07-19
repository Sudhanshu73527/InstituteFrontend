import React from 'react';
import { useNavigate } from 'react-router-dom'; // or use window.history if not using React Router

const UnderConstruction = () => {
  const navigate = useNavigate(); // If using React Router

  const handleBack = () => {
    navigate(-1); // Or use window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-yellow-700 mb-4">🚧 Page Under Construction 🚧</h1>
      <p className="text-lg text-gray-700 mb-6">
        We're working on this feature. Please check back later.
      </p>

      <button
        onClick={handleBack}
        className="mb-8 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
      >
        🔙 Go Back
      </button>

      <footer className="absolute bottom-4 text-sm text-gray-600">
        Powered by <span className="font-semibold">Webla Pvt Ltd</span>
      </footer>
    </div>
  );
};

export default UnderConstruction;
