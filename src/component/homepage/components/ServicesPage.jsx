
import React from "react";
import { CircleArrowRight, MonitorCog, Smartphone, Megaphone, } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className=" relative overflow-hidden bg-gradient-to-br from-[#fff9f9] via-[#fff3f3] to-[#ffecec] min-h-screen py-16 sm:py-20 px-6 sm:px-10 md:px-20">
      {/* ======= Decorative Curved Shape (Top-Right) ======= */}

      {/* ======= Section Heading ======= */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#0d2550] mb-3">
          What Services I'm Providing
        </h3>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          I help businesses grow with stunning designs, seamless experiences,
          and smart digital strategies.
        </p>
        <div className="h-[3px] w-20 bg-red-500 mx-auto rounded-full"></div>
      </div>

      {/* ======= Services Grid ======= */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
        {/* === Single Service Card === */}
        {[
          {
            icon: <Smartphone className="w-10 h-10 text-red-500" />,
            title: "UI/UX Design",
            desc: "Designing engaging, intuitive user experiences that drive results and delight users.",
          },
          {
            icon: <Megaphone className="w-10 h-10 text-red-500" />,
            title: "Digital Marketing",
            desc: "Boosting your brand’s online presence through smart marketing and SEO strategies.",
          },
          {
            icon: <MonitorCog className="w-10 h-10 text-red-500" />,
            title: "Web Development",
            desc: "Creating fast, modern, and responsive websites with a seamless user experience.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(255,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-500 text-center p-8 sm:p-10 flex flex-col items-center"
          >
            {/* Icon */}
            <div className="bg-red-100 rounded-full p-5 flex justify-center items-center mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h4 className="text-lg sm:text-xl font-semibold text-[#0d2550] mb-3">
              {service.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              {service.desc}
            </p>

            {/* Arrow Icon */}
            <button className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
              <CircleArrowRight className="w-9 h-9 text-gray-500 hover:text-red-400 transition-all duration-300" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
