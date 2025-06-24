import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password change logic here
    if (form.password === form.confirmPassword) {
      console.log("Password successfully changed");
    } else {
      console.log("Passwords do not match");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400 relative overflow-hidden">
      {/* Decorative Background Line SVGs */}
      <div className="absolute w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 Q50,0 100,100" stroke="grey" strokeWidth="0.5" fill="none" opacity="0.1" />
        </svg>
      </div>

      {/* Change Password Card */}
      <div className="bg-[#0f172a] text-white w-full max-w-md rounded-xl shadow-2xl p-8 z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-300 mb-2">CIHS</h1>
          <h2 className="text-xl font-semibold">Change Password</h2>
          <p className="text-sm text-gray-400 mt-1">Enter your new password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password Input */}
          <div className="relative flex items-center border border-gray-600 rounded-lg px-4 py-2 focus-within:border-teal-500 transition-all duration-300">
            <FaLock className="text-teal-300 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="New Password"
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

          {/* Confirm Password Input */}
          <div className="relative flex items-center border border-gray-600 rounded-lg px-4 py-2 focus-within:border-teal-500 transition-all duration-300">
            <FaLock className="text-teal-300 mr-2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="bg-[#1e293b] w-full text-sm text-white placeholder-gray-400 outline-none"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-300 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
