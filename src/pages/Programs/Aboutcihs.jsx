import React from "react";

const Aboutcihs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-700">
          About CIHS – Safety Courses Division
        </h2>
       <div className="text-lg mb-12 max-w-3xl mx-auto space-y-6">
  <p>
    CIHS Studies is a premier institute dedicated to producing industry-ready professionals in the field of Health, Safety, and Environment (HSE). Unlike traditional institutes that focus solely on classroom teaching and certification, we are committed to preparing our students for real-world job roles with 100% job placement support.
  </p>

  <p>
    At CIHS Studies, we don’t just teach — we transform our students into confident, competent safety professionals. We understand the critical role safety plays in every industry, which is why our training is comprehensive, practical, and aligned with both national and international standards.
  </p>

  <p>
    Our students are equipped with in-depth knowledge and hands-on skills required to meet the growing demand for safety experts across industries such as construction, manufacturing, oil & gas, infrastructure, and more.
  </p>

  <p>
    <strong>What We Teach:</strong> At CIHS Studies, our curriculum covers essential laws, standards, and international safety regulations, including:
    <ul className="list-disc list-inside mt-2">
      <li>The Factories Act, 1948</li>
      <li>The Building and Other Construction Workers (BOCW) Act, 1996</li>
      <li>Occupational Safety and Health Administration (OSHA) standards</li>
      <li>ISO (International Organization for Standardization) systems and compliance</li>
      <li>International Labour Organization (ILO) safety practices and labor rights</li>
    </ul>
  </p>

  <p>
    Our approach is not just academic—we incorporate real-case studies, safety audits, incident investigation methods, and practical risk management techniques. This ensures our students don’t just pass exams—they are ready to perform in real industrial environments from day one.
  </p>

  <p>
    <strong>Our Leadership:</strong> CIHS Studies is led by Mr. Sahil Khan Shera, a highly respected name in the QHSE field. With over 12 years of professional experience, Mr. Shera has audited more than 42 projects across India and multinational companies, bringing a wealth of knowledge, field experience, and global best practices to our classrooms.
  </p>

  <p>
    His vision is simple yet powerful: To build a generation of safety leaders who are job-ready, compliant, and capable of driving workplace safety at every level.
  </p>
</div>


        {/* Safety Courses Offered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fire & Industrial Safety
            </h3>
            <p className="text-gray-600">
              Learn essential fire prevention methods, industrial safety
              standards, and emergency response techniques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Health & Environmental Safety
            </h3>
            <p className="text-gray-600">
              Gain in-depth knowledge of workplace health hazards, PPE usage,
              and environmental compliance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Diploma in Safety Management
            </h3>
            <p className="text-gray-600">
              A complete professional diploma to kickstart your career in safety
              supervision and site inspection roles.
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
            professionals in industries such as construction, oil & gas,
            factories, and manufacturing units across India and the Gulf
            countries.
          </p>
          <ul className="list-disc list-inside text-left text-gray-600">
            <li>100% practical training with real-life simulations</li>
            <li>Certifications recognized by major industries</li>
            <li>Job assistance and overseas placement guidance</li>
          </ul>
        </div>

        {/* Prompts */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-green-700 mb-3">
            Why Choose a Safety Career?
          </h4>
          <p className="text-gray-700 text-lg">
            ✔️ High demand in construction and industrial sectors
            <br />
            ✔️ Opportunity to work abroad with attractive salaries
            <br />
            ✔️ Make a real difference by protecting lives and environments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutcihs;
