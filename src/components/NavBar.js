import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth/session data if needed
    localStorage.clear(); // or any auth token
    navigate("/"); // redirect to login page
  };

  return (
    <div className="w-full flex justify-between items-center p-4 bg-black bg-opacity-70 text-white fixed top-0 left-0 z-50 backdrop-blur-md shadow-lg">
      {/* Home button */}
      <h1
        className="text-2xl font-bold cursor-pointer hover:text-yellow-400 transition-colors duration-300"
        onClick={() => navigate("/home")}
      >
        🏠 Home
      </h1>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-md text-white font-semibold transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}
