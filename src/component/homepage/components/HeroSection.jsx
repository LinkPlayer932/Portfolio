


import React from "react";
import { Instagram, Linkedin, Dribbble, Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 bg-[#fff9f9] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-26 md:py-45 overflow-hidden">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10">
        
        {/* Social Icons */}
        <div className="flex md:flex-col items-center justify-center md:items-center space-x-6 md:space-x-0 md:space-y-4">
          <a href="https://www.linkedin.com/in/muhammad-qasim-75004a386/" className="text-gray-600 hover:text-red-600 transition">
            <Linkedin size={22} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition">
            <Instagram size={22} />
          </a>
          <a href="https://www.facebook.com" className="text-gray-600 hover:text-red-600 transition">
            <Facebook size={22} />
          </a>
        </div>

        {/* Text Content */}
        <div className="align-text-top md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d2550] leading-snug mb-4">
            I’m Web Developer <br />
            <span className="text-[#0d2550]">Muhammad Qasim</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae soluta obcaecati. Quam repudiandae iusto hic minima deleniti quae, dolores sapiente itaque velit debitis ad quas recusandae.
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition w-fit mx-auto md:mx-0">
            Learn more
          </button>
        </div>
      </div>

      {/* RIGHT SECTION (IMAGE) */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1683121879092-d26591501d9b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1374"
          alt="Developer"
          className="w-48 sm:w-60 md:w-80 lg:w-96 rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
