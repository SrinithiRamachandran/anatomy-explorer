import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import organData from "./organData"; // make sure this path is correct
import Navbar from "../components/NavBar";
export default function OrganOfTheDay() {
  const [organOfTheDay, setOrganOfTheDay] = useState(null);

  useEffect(() => {
    if (!organData) return;
    const organs = Object.keys(organData);
    if (organs.length === 0) return;

    // pick an organ based on today's date
    const today = new Date();
    const index = today.getDate() % organs.length;
    setOrganOfTheDay(organData[organs[index]]);
  }, []);

  if (!organOfTheDay) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading Organ of the Day...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center p-10">
      <Navbar />
      <h2 className="text-4xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg text-center">
        🩺 Organ of the Day
      </h2>

      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl text-center">
        {/* Colored circle */}
        <div
          style={{
            width: "150px",
            height: "150px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            backgroundColor: organOfTheDay.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#000",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          {organOfTheDay.name[0]}
        </div>

        <h3 className="text-3xl font-bold mb-2 text-orange-400">
          {organOfTheDay.name}
        </h3>
        <p className="mb-2">
          <strong>Function:</strong> {organOfTheDay.function}
        </p>
        <p className="mb-4">
          <strong>Location:</strong> {organOfTheDay.location}
        </p>

        <Link
          to={`/organ/${organOfTheDay.name.toLowerCase()}`}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
