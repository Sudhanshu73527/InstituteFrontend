import React from "react";

const InfoSection = () => {
  return (
    <div className="bg-green-700 py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-black">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold mb-4">MENTORSHIP</h2>
          <p>
            Our mentors guide you through every phase of your PhD journey,
            breaking down complex steps into manageable tasks and keeping you
            motivated to achieve your goals.
          </p>
        </div>

        {/* Card 2 */} 
        <div className="bg-white rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold mb-4 uppercase">Course SELECTION</h2>
          <p>
            We help you choose a meaningful and impactful research topic that
            aligns with your goals and sets the foundation for a successful PhD
            journey.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold mb-4 uppercase">RESEARCH GUIDANCE</h2>
          <p>
            We provide clear guidance on structuring your research
            documents—proposals, synopses, and more—so you stay organized and
            present your work professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
