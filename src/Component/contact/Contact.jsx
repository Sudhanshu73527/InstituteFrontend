// import React from "react";
// import illustration from "../../assets/shal1.jpeg"; // Make sure to place your image accordingly

// const Contact = () => {
//   return (
//     <div className="bg-green-700 text-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
//       {/* Left Side: Text + Image */}
//       <div className="md:w-1/2 w-full mb-8 md:mb-0">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">Book a Free Consultation</h2>
//         <p className="mb-6 text-white">
//           Schedule a free session with a PhD mentor and subject expert for title selection or
//           any other guidance you need.
//         </p>
//         <img src={illustration} alt="Consultation Illustration" className="w-full max-w-md" />
//       </div>

//       {/* Right Side: Form */}
//       <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full md:w-[45%]">
//         <form className="space-y-5">
//           {/* Name Field */}
//           <div>
//             <label className="text-sm font-bold text-gray-800 block mb-1 uppercase">Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full px-5 py-3 rounded-full bg-purple-900 text-white placeholder-purple-300 focus:outline-none"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="text-sm font-bold text-gray-800 block mb-1 uppercase">Your Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-5 py-3 rounded-full bg-purple-900 text-white placeholder-purple-300 focus:outline-none"
//             />
//           </div>

//           {/* Phone Field */}
//           <div>
//             <label className="text-sm font-bold text-gray-800 block mb-1 uppercase">Your Phone Number</label>
//             <input
//               type="text"
//               placeholder="Enter your phone number"
//               className="w-full px-5 py-3 rounded-full bg-purple-900 text-white placeholder-purple-300 focus:outline-none"
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label className="text-sm font-bold text-gray-800 block mb-1 uppercase">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Enter your message"
//               className="w-full px-5 py-3 rounded-2xl bg-purple-900 text-white placeholder-purple-300 focus:outline-none resize-none"
//             ></textarea>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import React from "react";
import consultImage from "../../assets/chuma1.png"; // Replace with actual path

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 w-full py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 drop-shadow-lg">
        Book Your <span className="text-yellow-300">Free Consultancy</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
        {/* Left Section - Image & Text */}
        <div className="md:w-1/2 p-10 bg-green-600 flex flex-col items-center text-center space-y-6">
          <h3 className="text-3xl font-bold text-yellow-300">
            Book a <span className="underline decoration-yellow-400 decoration-4">Free Consultation</span>
          </h3>
          <p className="text-yellow-100 text-lg max-w-md">
            Schedule a free session with a PhD mentor and subject expert for title selection or any other guidance you need.
          </p>
          <img
            src={consultImage}
            alt="Consultation"
            className="w-full max-w-sm rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white p-12 rounded-3xl shadow-xl">
          <form className="space-y-8">
            {[
              { label: "Your Name", type: "text", placeholder: "Enter your name" },
              { label: "Your Email", type: "email", placeholder: "Enter your email" },
              { label: "Your Phone Number", type: "tel", placeholder: "Enter your phone number" },
            ].map(({ label, type, placeholder }, i) => (
              <div key={i}>
                <label className="block text-gray-700 font-semibold mb-2 uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full p-4 rounded-xl border-2 border-green-300 focus:border-yellow-400 transition outline-none text-gray-800"
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-700 font-semibold mb-2 uppercase">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                rows="4"
                className="w-full p-4 rounded-2xl border-2 border-green-300 focus:border-yellow-400 transition outline-none text-gray-800 resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold rounded-full px-14 py-3 shadow-lg transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



