import React from "react";
import Image from "next/image";

const PortfolioGrid = () => {
  return (
    <section className="py-20 px-6 sm:px-10 md:px-12 bg-gray-50">
      {/* === First Row (70% + 30%) === */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 mb-12">
        {/* Left Column (70%) */}
        <div className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ClickBoost Project
          </h2>
          <div className="overflow-hidden rounded-lg mb-4 w-full h-72">
            <img
              src="/ClickBost.jpg"
              alt="ClickBoost Project"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            View More
          </button>
        </div>

        {/* Right Column (30%) */}
        <div className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            SoFi Marketing Campaign
          </h2>
          <div className="overflow-hidden rounded-lg mb-4 w-full h-72">
            <img
              src="/SoFi.jpg"
              alt="SoFi Project"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            Learn More
          </button>
        </div>
      </div>

      {/* === Second Row (30% + 30% + 30%) === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Marketing Dashboard
          </h2>
          <div className="overflow-hidden rounded-lg mb-4 w-full h-56">
            <img
              src="/BrandBlitz.jpg"
              alt="Marketing Dashboard"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            Demo
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Branding Kit
          </h2>
          <div className="overflow-hidden rounded-lg mb-4 w-full h-56">
            <img
              src="/GetJob.jpg"
              alt="Branding Kit"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            Demo
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Web Revamp
          </h2>
          <div className="overflow-hidden rounded-lg mb-4 w-full h-56">
            <img
              src="/LearnHub.jpg"
              alt="Web Revamp"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
