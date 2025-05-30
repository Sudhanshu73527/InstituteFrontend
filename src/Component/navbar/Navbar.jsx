import React, { useState } from "react";
import { NavbarMenu } from "../../Mockdata/data";
import { PiStudent } from "react-icons/pi";
import { MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
   {/* Top Contact Bar */}
{/*  */}



      {/* Main Navbar */}
      <nav className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <img
              src={logo}
              alt="CIHS Studies Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold uppercase"> <strong className="text-green-500">Cihs</strong> <strong>studies</strong></span>
              <span className="text-sm text-green-500 uppercase">
                private limited
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block ml-auto">
            <ul className="flex items-center gap-4 text-black">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-green-500 font-semibold uppercase"
                  >
                    {item.title}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <ul className="absolute top-full left-0 mt-1 min-w-[200px] bg-white border border-green-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                      {item.submenu.map((sub, index) => (
                        <li key={index}>
                          <a
                            href={sub.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white font-semibold hover:underline uppercase whitespace-nowrap"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Search + Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="text-xl hover:bg-green-100 hover:text-green-500 rounded-full p-2 duration-200">
                <CiSearch className="text-2xl" />
              </button>
            </div>
            {/* Hamburger */}
            <button
              className="text-2xl md:hidden hover:bg-green-100 hover:text-green-500 rounded-full p-2 duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-4 pb-4 overflow-hidden space-y-4"
            >
              {/* Mobile Search */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="text-xl hover:bg-green-100 hover:text-green-500 rounded-full p-2 duration-200">
                  <CiSearch className="text-2xl" />
                </button>
              </div>
              {/* Mobile Links */}
              <ul className="flex flex-col gap-2 text-gray-600">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block py-2 px-3 rounded hover:bg-green-100 hover:text-green-500 font-semibold uppercase"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
