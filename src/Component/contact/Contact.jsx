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
    <div className="bg-green-500 w-full py-10 px-4 md:px-16">
      {/* Top Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Book Your Free Consultancy
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Left Section - Image & Text */}
        <div className="md:w-1/2 p-8 bg-green-500">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Book a <span className="text-white">Free Consultation</span>
          </h2>
          <p className="text-white mb-6">
            Schedule a free session with a PhD mentor and subject expert for
            title selection or any other guidance you need.
          </p>
          <img
            src={consultImage}
            alt="Consultation"
            className="w-full h-auto max-w-sm rounded-xl"
          />
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block font-semibold text-sm text-gray-800 mb-2 uppercase">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-full bg-purple-800 text-white placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm text-gray-800 mb-2 uppercase">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-full bg-purple-800 text-white placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm text-gray-800 mb-2 uppercase">
                Your Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-full bg-purple-800 text-white placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm text-gray-800 mb-2 uppercase">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                rows="3"
                className="w-full p-3 rounded-xl bg-purple-800 text-white placeholder-white focus:outline-none"
              />
            </div>
            <button className="bg-purple-800 rounded text-white text-center">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


