import React from "react";
import { Facebook, Instagram, Github, Twitter } from "lucide-react";

const Aboutme = () => {
  return (
    <section className="bg-white py-16 sm:py-15 px-6 sm:px-10 md:px-20 lg:px-24">
      <div className="text-center bg-white py-8 mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2550] mb-5">
          About Me
        </h2>
        <div className="h-0.5 w-19 bg-red-500 mx-auto rounded"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Image Section - Now on the Left */}
        <div className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0">
          <div className="absolute bg-red-400 w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[360px] md:h-[460px] rounded-md top-4 left-4 md:top-6 md:left-6 -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Developer workspace"
            className="rounded-md shadow-lg w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[360px] md:h-[460px] object-cover"
          />
        </div>

        {/* Text Section - Now on the Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0d2550] mb-4 leading-snug">
            Developing With a Passion <br />
            While Exploring The World.
          </h3>
          <div className="h-[3px] w-12 bg-red-500 mb-6 mx-auto md:mx-0 rounded"></div>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-7 text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              repellendus, incidunt pariatur itaque expedita provident
              asperiores enim quas quasi saepe?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ex distinctio nam, aut doloribus laudantium aliquid similique
              tempore et tenetur sint sequi minima animi, natus itaque dolorem
              necessitatibus provident placeat!
            </p>
            <div className="flex space-x-3 mb-6 ml-80 md:mb-3">
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
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <p className="text-[#0d2550]">Let's talk with me.</p>
          <a href="#" className="text-2xl font-mono text-[#0d2550]">
            contact@domain.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
