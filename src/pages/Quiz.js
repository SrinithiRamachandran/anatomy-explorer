import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
const questions = [
  {
    question: "Which organ pumps blood throughout the body?",
    options: ["Lungs", "Heart", "Kidneys", "Brain"],
    answer: "Heart",
  },
  {
    question: "Which part of the body controls all activities?",
    options: ["Liver", "Brain", "Spinal Cord", "Lungs"],
    answer: "Brain",
  },
  {
    question: "Where does digestion begin?",
    options: ["Stomach", "Mouth", "Small Intestine", "Esophagus"],
    answer: "Mouth",
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[index].answer) setScore(score + 1);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
     <Navbar />
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Anatomy Quiz 🧠</h1>

      {!showResult ? (
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-2xl text-center">
          <h2 className="text-2xl mb-4">{questions[index].question}</h2>
          <div className="grid grid-cols-2 gap-4">
            {questions[index].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="bg-gray-700 hover:bg-purple-600 p-3 rounded-lg transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-2xl text-center">
          <h2 className="text-2xl mb-4">Quiz Completed 🎉</h2>
          <p className="text-lg">You scored {score} out of {questions.length}</p>
        </div>
      )}

      <Link
        to="/home"
        className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
