
import React from "react";
import { Facebook, Instagram, Github, Twitter, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d2550] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-10 border-b border-gray-600">

        <div className="flex space-x-5 mb-6 md:mb-0">
          <a href="#" className="hover:text-red-400 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <Twitter size={24}  />
          </a>
        </div>

        <div className="text-2xl justify-between font-bold text-black tracking-wide">
          <img
            src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png"
            alt="Logo"
            className="w-20 h-20"
          />
        </div>

        <div>
          <a
            href="mailto:mail@example.com"
            className="text-white font-semibold text-lg hover:text-red-400 transition"
          >
            info.muhammadqasim8@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center py-5 text-gray-300 text-sm">
        Copyright © 2025 Personal Portfolio
      </div>
    </footer>
  );
};

export default Footer;
