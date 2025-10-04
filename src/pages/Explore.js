import React from "react";
import { Male } from "../components";
import bgImage from "../assets/body-bg.jpg"; // Add a full-body background image in your assets
import Navbar from "../components/NavBar";
export default function Explore() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     <Navbar />
      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Page Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
          Explore the Human Body
        </h1>

        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500">
          <Male />
        </div>

        {/* Optional button for navigation */}
        <button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-500 transition-all duration-300"
          onClick={() => alert("Navigate to next system!")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
