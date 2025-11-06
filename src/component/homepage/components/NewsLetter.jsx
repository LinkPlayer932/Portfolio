// File: src/components/NewsletterSection.jsx

import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2550] mb-4">
          Stay In Touch
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Divider line */}
        <div className="w-16 h-[2px] bg-red-500 mx-auto mb-10"></div>

        {/* Input & Button */}
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full md:w-[400px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <button
            type="submit"
            className="bg-[#e65b56] text-white font-medium px-8 py-3 rounded-md hover:bg-[#cf4f4b] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
