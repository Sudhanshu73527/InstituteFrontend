// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-700 py-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Safety Promise */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-green-700">
            Our Safety Promise
          </h2>
          <p className="text-sm leading-relaxed">
            We are committed to providing a safe and secure learning
            environment. Your privacy and trust are our top priorities. All data
            is encrypted, and our platform is monitored 24/7 for security.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-green-700">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="/about" className="hover:text-green-600 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-green-600 hover:underline"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/admissions"
                className="hover:text-green-600 hover:underline"
              >
                Admissions
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-green-600 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-green-600 hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-green-700">
            Subscribe for Updates
          </h2>
          <p className="text-sm mb-4">
            Get the latest news and updates from CIHS Studies delivered to your
            inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center gap-4 text-green-700 text-xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} CIHS Studies Private Limited. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
