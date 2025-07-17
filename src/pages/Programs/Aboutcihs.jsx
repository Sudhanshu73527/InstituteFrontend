import React from "react";

const Aboutcihs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-700">
          About CIHS – Safety Courses Division
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          CIHS Institute is a recognized leader in safety education and training. 
          We specialize in providing industry-approved safety courses that empower 
          students to build a successful career in health, fire, and industrial safety management.
        </p>

        {/* Safety Courses Offered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fire & Industrial Safety
            </h3>
            <p className="text-gray-600">
              Learn essential fire prevention methods, industrial safety standards, and emergency response techniques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Health & Environmental Safety
            </h3>
            <p className="text-gray-600">
              Gain in-depth knowledge of workplace health hazards, PPE usage, and environmental compliance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Diploma in Safety Management
            </h3>
            <p className="text-gray-600">
              A complete professional diploma to kickstart your career in safety supervision and site inspection roles.
            </p>
          </div>
        </div>

        {/* Placement Highlights */}
        <div className="mt-16 bg-green-100 p-8 rounded-xl shadow-inner">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Career & Placement Opportunities
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            CIHS has placed over{" "}
            <span className="font-semibold text-green-700">800+</span> safety
            professionals in industries such as construction, oil & gas, factories,
            and manufacturing units across India and the Gulf countries.
          </p>
          <ul className="list-disc list-inside text-left text-gray-600">
            <li>100% practical training with real-life simulations</li>
            <li>Certifications recognized by major industries</li>
            <li>Job assistance and overseas placement guidance</li>
          </ul>
        </div>

        {/* Prompts */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Why Choose a Safety Career?</h4>
          <p className="text-gray-700 text-lg">
            ✔️ High demand in construction and industrial sectors<br />
            ✔️ Opportunity to work abroad with attractive salaries<br />
            ✔️ Make a real difference by protecting lives and environments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutcihs;
