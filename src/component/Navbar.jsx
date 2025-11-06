// File: src/components/Navbar.jsx

import React from "react";
import { ChartNoAxesGantt, Link, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap  rounded-full items-center justify-between px-8 md:px-16 py-6 bg-[#fff9f9] shadow-lg ">

      <div className="text-xl font-bold text-black tracking-wide">
        <img
          src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png"
          alt="Logo"
          className="w-12 h-12"
        />
      </div>

      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <label htmlFor="menu-toggle" className="md:hidden cursor-pointer z-20">
        <ChartNoAxesGantt color="#fa0000" className="peer-checked:hidden" />
        <X color="#fa0000" className="hidden peer-checked:inline" />
      </label>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <a href="/" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Home</a>
        <a href="/about" className="hover:text-red-600 cursor-pointer transition-colors duration-300">About</a>
        <a href="/portfolio" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Portfolio</a>
        <a href="/contact" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Contact</a>
      </div>

      {/* Hire Me button — visible only on desktop */}
      <div className="hidden md:block">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Hire me
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="absolute top-full left-0 w-full bg-white shadow-md flex-col items-center space-y-4 py-5 hidden peer-checked:flex md:hidden z-10">

              <div className="flex flex-col space-y-3 text-base font-sans text-center">
        <a href="/" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Home</a>
        <a href="/about" className="hover:text-red-600 cursor-pointer transition-colors duration-300">About</a>
        <a href="/portfolio" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Portfolio</a>
        <a href="/contact" className="hover:text-red-600 cursor-pointer transition-colors duration-300">Contact</a>
      </div>

        {/* Hire Me button — visible only in mobile toggle */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Hire me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
