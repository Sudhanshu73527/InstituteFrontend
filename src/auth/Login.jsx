import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(form);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400 relative overflow-hidden">
      {/* Decorative Background Line SVGs (optional) */}
      <div className="absolute w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 Q50,0 100,100" stroke="grey" strokeWidth="0.5" fill="none" opacity="0.1" />
        </svg>
      </div>

      {/* Login Card */}
      <div className="bg-[#0f172a] text-white w-full max-w-md rounded-xl shadow-2xl p-8 z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-300 mb-2">CIHS</h1>
          <h2 className="text-xl font-semibold">Welcome!</h2>
          <p className="text-sm text-gray-400 mt-1">Enter your Credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative flex items-center border border-gray-600 rounded-lg px-4 py-2 focus-within:border-teal-500 transition-all duration-300">
            <FaEnvelope className="text-teal-300 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#1e293b] w-full text-sm placeholder-gray-400 outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center border border-gray-600 rounded-lg px-4 py-2 focus-within:border-teal-500 transition-all duration-300">
            <FaLock className="text-teal-300 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="bg-[#1e293b] w-full text-sm text-white placeholder-gray-400 outline-none"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-300 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
          >
            ✓ Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
