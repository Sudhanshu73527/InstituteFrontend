import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-green-100 to-green-200 text-gray-700 pt-12 pb-6 shadow-inner">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Safety Promise */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-green-800">Our Safety Promise</h2>
          <p className="text-sm leading-relaxed">
            We ensure a secure learning environment. Your privacy and data are protected through advanced encryption and 24/7 monitoring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-green-800">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About Us", href: "/about" },
              { name: "Courses", href: "/courses" },
              { name: "Admissions", href: "/admissions" },
              { name: "Contact", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-green-600 hover:underline transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-green-800">Our Address</h2>
          <p className="text-sm leading-relaxed">
            CIHS Studies Pvt. Ltd. <br />
            Main Road, Infront of Mufassil Thana <br />
            Mansha Tola, Bettiah <br />
            Bettiah, West Champaran, Bihar - 845438 <br />
            India
          </p>
          <p className="mt-2 text-sm text-green-700 font-medium">Phone: +91  87579 21402</p>
          <p className="text-sm text-green-700 font-medium">Email: info@cihsstudies.com</p>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-green-800">Subscribe for Updates</h2>
          <p className="text-sm mb-3">
            Stay informed with the latest news, courses, and events from CIHS Studies.
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
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
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

      {/* Divider */}
      <div className="border-t border-green-300 my-8 mx-auto w-4/5"></div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-green-700 text-xl mb-4">
        {[
          { icon: <FaFacebookF />, href: "https://facebook.com" },
          { icon: <FaTwitter />, href: "https://twitter.com" },
          { icon: <FaInstagram />, href: "https://instagram.com" },
          { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition transform hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 dark:bg-gray-900 py-6 text-center">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-green-600 dark:text-white">CIHS Studies Private Limited</span>. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          Powered by <a href="https://www.webala.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Webala</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
