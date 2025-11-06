import React from "react";
import { Locate, LocationEditIcon, Mail, Phone } from "lucide-react";

const Form = () => {
  return (
    <div className="min-h-screen py-8  bg-[#fff9f9] font-poppins">
      {/* --- Contact Info Cards --- */}

      <div className="flex flex-wrap justify-center gap-6 mb-15">
        {/* Phone Card */}
        <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 w-60 text-center">
          <div className=" text-[#f85c50] flex justify-center mb-3">
            <Phone size={32} />
          </div>

          <h4 className="text-[#0d2b6a] font-semibold mb-1">+92-326-732-4500</h4>
          <p className="text-gray-600 text-sm">
            Monday - Friday from 7am - 5pm
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 w-60 text-center">
          <div className=" text-[#f85c50] flex justify-center mb-3">
            <LocationEditIcon size={32} />
          </div>
          <h4 className="text-[#0d2b6a] font-semibold mb-1">
            Gulberg 2, Lahore, Pakistan
          </h4>
          <p className="text-gray-600 text-sm">Lahore, 05450</p>
        </div>

        {/* Email Card */}
        <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 w-60 text-center">
          <div className="text-[#f85c50] flex justify-center mb-3">
            <Mail size={32} />
          </div>
          <i className="fas fa-envelope text-3xl text-[#f85c50] mb-3"></i>
          <h4 className="text-[#0d2b6a] font-semibold mb-1">
            Linkplayer932@gmail.com
          </h4>
          <p className="text-gray-600 text-sm">Contact me every time!</p>
        </div>
      </div>

      {/* --- Contact Form --- */}
      <div className=" bg-white shadow-lg rounded-lg max-w-3xl mx-auto mb-15 p-10">
        <h2 className="text-[#0d2b6a] text-2xl font-bold items-center mb-2">
          Get In Touch
        </h2>
        <div className="w-16 border-b-2 border-[#f85c50] mb-8"></div>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f85c50]"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f85c50]"
          />
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f85c50]"
          ></textarea>

          <p className="text-sm text-gray-500">0 of 1 max characters.</p>

          <button
            type="submit"
            className="bg-[#f85c50] text-white py-4 rounded-md font-semibold hover:bg-[#d94a41] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
