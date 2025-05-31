import React from "react";
import libraryImage from "../../assets/shal1.jpeg"; // Replace with actual path

const planData = [
  { shift: "Morning", duration: "6–11AM (5hrs)", economical: 350, premium: 400 },
  { shift: "Noon", duration: "11–4PM (5hrs)", economical: 450, premium: "Not Available" },
  { shift: "Evening", duration: "4–9PM (5hrs)", economical: 350, premium: 400 },
  { shift: "Double (Morn.+Noon)", duration: "6AM to 4PM (10hrs)", economical: 700, premium: 800 },
  { shift: "Double (Noon+Eve.)", duration: "11AM to 9PM (10hrs)", economical: 700, premium: 800 },
  { shift: "Double (Morn.&Noon)", duration: "6–11 & 4–9PM (10hrs)", economical: 700, premium: 800 },
  { shift: "All Shift", duration: "24 Hours (Without Night)", economical: 900, premium: 1000 },
  { shift: "6AM to 6PM", duration: "6AM to 6PM (12hrs)", economical: 900, premium: 1000 },
  { shift: "9AM to 9PM", duration: "9AM to 9PM (12hrs)", economical: 900, premium: 1000 },
  { shift: "Locker", duration: "30 Days", economical: 100, premium: 100 },
];

const Plan = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
        Our Creative Digital Library Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        {/* Left: Promotion Graphic */}
        <div className="border-2 border-blue-600 rounded-xl overflow-hidden shadow-md">
          <img
            src={libraryImage}
            alt="Creative Digital Library"
            className="w-full object-contain"
          />
        </div>

        {/* Right: Table */}
        <div className="border-2 border-red-500 rounded-xl p-4 bg-white shadow-md">
          <div className="text-center mb-4">
            <div className="bg-gray-100 text-black font-semibold py-2 px-4 rounded inline-block text-sm shadow-sm">
              निःशुल्क नामांकन
            </div>
          </div>
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead className="bg-red-100 font-semibold text-gray-900">
              <tr>
                <th className="border px-3 py-2 text-left">Shift</th>
                <th className="border px-3 py-2 text-left">Duration</th>
                <th className="border px-3 py-2 text-center">Monthly Fee<br />(Economical)</th>
                <th className="border px-3 py-2 text-center">Reserve Fee<br />(Premium)</th>
              </tr>
            </thead>
            <tbody>
              {planData.map((plan, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{plan.shift}</td>
                  <td className="border px-3 py-2">{plan.duration}</td>
                  <td className="border px-3 py-2 text-center">{plan.economical}</td>
                  <td className="border px-3 py-2 text-center">{plan.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Plan;


// import React from "react";
// import libraryImage from "../../assets/shal1.jpeg"; // First image
// import secondImage from "../../assets/shal2.jpeg";  // Second image (add your image here)

// const Plan = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
//         Our Creative Digital Library Plan
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
//         {/* Left: First Graphic */}
//         <div className="border-2 border-blue-600 rounded-xl overflow-hidden shadow-md">
//           <img
//             src={libraryImage}
//             alt="Creative Digital Library"
//             className="w-full object-contain"
//           />
//         </div>

//         {/* Right: Second Graphic */}
//         <div className="border-2 border-red-500 rounded-xl overflow-hidden shadow-md">
//           <img
//             src={secondImage}
//             alt="Library Plan Details"
//             className="w-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Plan;

