import React, { useState } from "react";
import { NavbarMenu } from "../../Mockdata/data";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colorClasses = ["text-green-600"];

  return (
    <>
      <nav className="bg-purple-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <Link to={"/"}>
          <div className="flex items-center gap-3 flex-none">
            <img src={logo} alt="CIHS Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold uppercase">
                <span className="text-green-600">Cihs</span> <span>studies</span>
              </span>
              <span className="text-xs text-green-500 uppercase">Private Limited</span>
            </div>
          </div>
          </Link>
          

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 text-black font-semibold uppercase">
              {NavbarMenu.map((item, index) => {
                const colorClass = colorClasses[index % colorClasses.length];
                return (
                  <li key={item.id} className="relative group">
                    <a
                      href={item.link}
                      className={`duration-200 ${colorClass} hover:bg-green-100/50 hover:text-green-700 px-2 py-1 rounded-md`}
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-green-200 shadow-xl rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={sub.link}
                              className="block px-4 py-2 text-sm hover:bg-green-100/80 hover:text-green-700 rounded transition"
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
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex flex-none">
            <Link
              to="/login"
              className="ml-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-5 py-2 rounded-full uppercase font-semibold shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m0 0l3-3m-3 3l3 3" />
              </svg>
              Sign in
            </Link>
          </div>

          {/* Hamburger - Mobile */}
          <div className="md:hidden flex-none">
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
              <ul className="flex flex-col gap-2 text-gray-700 font-semibold uppercase">
                {NavbarMenu.map((item, index) => {
                  const colorClass = colorClasses[index % colorClasses.length];
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className={`block py-2 px-3 rounded hover:bg-green-100/70 ${colorClass} hover:text-green-700`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                {/* Login Button - Mobile */}
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-4 mt-2 text-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex justify-center items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Sign in 
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
