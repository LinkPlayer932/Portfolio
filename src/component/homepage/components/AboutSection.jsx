
import React from "react";

const AboutSection = () => {
  return (
    <section className="container items-center bg-white py-10 sm:py-8 px-6 sm:px-8 md:px-16 lg:px-24">

      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2550] mb-3">
          About Me
        </h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="h-[3px] w-16 bg-red-500 mx-auto rounded"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0d2550] mb-4 leading-snug">
            Developing With a Passion <br />
            While Exploring The World.
          </h3>
          <div className="h-[3px] w-12 bg-red-500 mb-6 mx-auto md:mx-0 rounded"></div>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-7 text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              repellendus, incidunt pariatur itaque expedita provident asperiores
              enim quas quasi saepe?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ex
              distinctio nam, aut doloribus laudantium aliquid similique tempore et
              tenetur sint sequi minima animi, natus itaque dolorem necessitatibus
              provident placeat!
            </p>
          </div>

          <p className="text-gray-700 mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae neque
            inventore officiis sequi quaerat odio.
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-md shadow-md transition">
            Contact Me
          </button>
        </div>


        <div className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0">

          <div className="absolute bg-red-400 w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[360px] md:h-[460px] rounded-md top-4 right-4 md:top-6 md:right-6 -z-10"></div>

          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Developer workspace"
            className="rounded-md shadow-lg w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[360px] md:h-[460px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
