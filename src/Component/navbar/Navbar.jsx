import React, { useState } from "react";
import { NavbarMenu } from "../../Mockdata/data";
import { MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colorClasses = [
    "text-green-600",
    "text-blue-600",
    "text-red-600",
    "text-yellow-600",
    "text-purple-600",
    "text-pink-600",
    "text-indigo-600",
  ];

  return (
    <>
      <nav className="bg-purple-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="CIHS Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold uppercase">
                <span className="text-green-600">Cihs</span> <span>studies</span>
              </span>
              <span className="text-xs text-green-500 uppercase">Private Limited</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <ul className="flex items-center gap-8 text-black font-semibold uppercase">
              {NavbarMenu.map((item, index) => {
                const colorClass = colorClasses[index % colorClasses.length];
                return (
                  <li key={item.id} className="relative group">
                    <a
                      href={item.link}
                      className={`duration-200 ${colorClass} hover:underline hover:text-black`}
                    >
                      {item.title}
                    </a>
                    {/* Submenu */}
                    {item.submenu && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-green-200 shadow-xl rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={sub.link}
                              className="block px-4 py-2 text-sm hover:bg-green-100 hover:text-green-600 transition"
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="absolute right-2 top-1 text-xl text-gray-500 hover:text-green-600">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-green-600 hover:bg-green-100 rounded-full p-2"
            >
              {mobileMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="text-xl text-green-600">
                  <CiSearch />
                </button>
              </div>
              <ul className="flex flex-col gap-2 text-gray-700 font-semibold uppercase">
                {NavbarMenu.map((item, index) => {
                  const colorClass = colorClasses[index % colorClasses.length];
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className={`block py-2 px-3 rounded hover:bg-green-100 ${colorClass} hover:text-black`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
