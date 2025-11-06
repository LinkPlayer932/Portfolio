

import React from "react";

const WorkExperience = () => {
  const experiences = [
    { title: "UI/UX Designer", year: "2015-2018", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", skill: "UI/UX Designer", percent: "75%" },
    { title: "Web Designer", year: "2015-2018", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", skill: "Web Designer", percent: "80%" },
    { title: "Web Developer", year: "2015-2018", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", skill: "Web Developer", percent: "85%" },
    { title: "Graphic Designer", year: "2015-2018", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", skill: "Graphic Designer", percent: "70%" },
    { title: "Marketing", year: "2015-2018", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", skill: "Marketing", percent: "60%" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#fff7f6] via-[#fff2f2] to-[#ffeaea] min-h-screen py-16 sm:py-20 px-4 sm:px-10 md:px-20">
      
      {/* ===== Background Light Curve ===== */}
      <svg
        className="absolute top-0 right-0 w-[400px] sm:w-[650px] md:w-[850px] h-[250px] sm:h-[450px] md:h-[600px] opacity-70 pointer-events-none"
        viewBox="0 0 850 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M850,0 C700,80 750,250 500,320 C300,370 200,320 0,420 L0,0 Z"
          fill="#ffefef"
        />
      </svg>

      {/* ===== Heading Section ===== */}
      <div className=" relative z-10 text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d2550] mb-3">
          Work Experience
        </h2>
        <p className="text-gray-600 mb-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="h-[2px] w-14 sm:w-16 bg-red-500 mx-auto rounded"></div>
      </div>

      {/* ===== Experience Cards ===== */}
      <div className="container relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 md:p-10"
          >
            {/* Title and Year */}
            <h4 className="text-lg sm:text-xl font-semibold text-[#0d2550] mb-1">
              {exp.title}
            </h4>
            <p className="text-sm sm:text-base text-red-400 font-medium mb-3">{exp.year}</p>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
              {exp.desc}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 sm:h-3 relative overflow-hidden mb-2">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: exp.percent }}
              ></div>
            </div>

            {/* Skill Tag + Percentage */}
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs sm:text-sm bg-red-500 text-white px-2 py-[2px] rounded">
                {exp.skill}
              </span>
              <span className="text-xs sm:text-sm text-gray-400">{exp.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
