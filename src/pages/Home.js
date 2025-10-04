import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/home-bg.jpg"; // Add your background image here
import Navbar from "../components/NavBar";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <Navbar />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-white drop-shadow-lg text-center">
        Welcome to Anatomy Explorer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <button
          onClick={() => navigate("/explore")}
          className="bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          🧠 Explore Parts
        </button>

        <button
        onClick={() => navigate("/OrganOfTheDay")}
          className="bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          🌟 Organ of the Day
        </button>

        <button
          onClick={() => navigate("/funfacts")}
          className="bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          💡 Fun Facts
        </button>

        <button
         onClick={() => navigate("/Quiz")}
          className="bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          🧩 Quiz
        </button>
      </div>
    </div>
  );
}
