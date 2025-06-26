import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaKey,
} from "react-icons/fa";
import "./Login.css"; // Ensure this contains autofill fixes

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-300 to-teal-400 relative overflow-hidden">
      {/* Decorative SVG Waves */}
      <div className="absolute w-full h-full pointer-events-none opacity-10 z-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 Q50,0 100,100" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Login Card */}
      <div className="backdrop-blur-md bg-[#0f172a]/90 text-white w-full max-w-md rounded-2xl shadow-2xl p-8 z-10 border border-teal-400">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-teal-300 mb-1 tracking-wide">CIHS</h1>
          <h2 className="text-2xl font-medium mb-1">Welcome Back 👋</h2>
          <p className="text-sm text-gray-400">Please enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative flex items-center border border-gray-600 rounded-xl px-4 py-2 bg-[#1e293b] focus-within:border-teal-500 transition duration-300">
            <FaEnvelope className="text-teal-300 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full text-sm placeholder-gray-400 outline-none bg-transparent text-white autofill:bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="relative flex items-center border border-gray-600 rounded-xl px-4 py-2 bg-[#1e293b] focus-within:border-teal-500 transition duration-300">
            <FaLock className="text-teal-300 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="w-full text-sm placeholder-gray-400 outline-none bg-transparent text-white"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-300 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="flex items-center justify-end gap-1 text-sm text-teal-400 hover:text-teal-300 transition"
              onClick={() => alert("Redirect to forgot password page.")}
            >
              <FaKey className="text-teal-300" />
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-2 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            ✓ Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
