import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to: ", email);
    // Implement your password reset logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400 relative overflow-hidden">
      {/* Decorative Background Line SVGs */}
      <div className="absolute w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 Q50,0 100,100" stroke="grey" strokeWidth="0.5" fill="none" opacity="0.1" />
        </svg>
      </div>

      {/* Forgot Password Card */}
      <div className="bg-[#0f172a] text-white w-full max-w-md rounded-xl shadow-2xl p-8 z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-300 mb-2">CIHS</h1>
          <h2 className="text-xl font-semibold">Forgot Password</h2>
          <p className="text-sm text-gray-400 mt-1">Enter your email to receive a password reset link</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative flex items-center border border-gray-600 rounded-lg px-4 py-2 focus-within:border-teal-500 transition-all duration-300">
            <FaEnvelope className="text-teal-300 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={email}
              onChange={handleChange}
              required
              className="bg-[#1e293b] w-full text-sm placeholder-gray-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
