import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/dark-bg.jpg"; // Replace with your image

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      {/* Register Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-96">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          Register
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
