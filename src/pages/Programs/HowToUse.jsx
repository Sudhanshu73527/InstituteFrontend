import React from "react";

const HowToUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        How to Use Our Website & Admin Panel
      </h2>

      {/* Section 1: For Students/Visitors */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg mb-10">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">
          🎓 For Students / Visitors (Website Usage)
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Visit the homepage to explore available programs and courses.</li>
          <li>Go to the "Programs" section to learn about various safety certifications.</li>
          <li>Click on "Admission Request" to fill out the form and send it directly via WhatsApp.</li>
          <li>Browse the “Blog” and “FAQ” sections to gain helpful insights.</li>
          <li>Use the contact section to reach out to the school for any queries.</li>
        </ol>
      </div>

      {/* Section 2: For Admin */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">
          🛠️ For Admin / Staff (Admin Panel Usage)
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Login to the admin panel using your credentials.</li>
          <li>Access the dashboard to view student data, course stats, and admission requests.</li>
          <li>Go to "Programs" to add, edit, or remove any course listings.</li>
          <li>Check the "Feedback" section to review comments and suggestions.</li>
          <li>Use the “Circular Upload” or “Gallery Upload” tools to update website content dynamically.</li>
          <li>Log out securely after use.</li>
        </ol>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500 italic">
        For support, contact the development team or refer to the Admin Manual.
      </p>
    </div>
  );
};

export default HowToUse;
