import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/dark-bg.jpg"; // Replace with your background image

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-96">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          Anatomy Explorer
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
