import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import questionsData from "./data/questionsData";

export default function Quiz() {
  const [system, setSystem] = useState(""); // chosen system
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const systems = Object.keys(questionsData);

  const startQuiz = (chosenSystem) => {
    setSystem(chosenSystem);
    const shuffled = [...questionsData[chosenSystem]].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 5)); // pick 5 random questions
    setIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (option) => {
    if (option === quizQuestions[index].answer) setScore(score + 1);
    if (index + 1 < quizQuestions.length) setIndex(index + 1);
    else setShowResult(true);
  };

  // System selection screen
  if (!system) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <h1 className="text-4xl font-bold mb-8 text-purple-400 text-center">
          Select a System to Start Quiz
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {systems.map((sys) => (
            <button
              key={sys}
              onClick={() => startQuiz(sys)}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg transition transform hover:scale-105 duration-300"
            >
              {sys.charAt(0).toUpperCase() + sys.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6">
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-400 drop-shadow-lg text-center">
        🧠 {system.charAt(0).toUpperCase() + system.slice(1)} Quiz
      </h1>

      {!showResult ? (
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-3xl shadow-2xl max-w-2xl w-full text-center">
          <h2 className="text-2xl md:text-3xl mb-6">{quizQuestions[index].question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[index].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="bg-gray-700 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl duration-300"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-6 text-gray-300">
            Question {index + 1} of {quizQuestions.length}
          </p>
        </div>
      ) : (
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-3xl shadow-2xl max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-400">Quiz Completed 🎉</h2>
          <p className="text-xl mb-6">
            You scored <span className="font-bold text-yellow-400">{score}</span> out of {quizQuestions.length}
          </p>
          <button
            onClick={() => setSystem("")}
            className="bg-purple-500 hover:bg-purple-700 px-6 py-3 rounded-xl shadow-lg font-semibold transition transform hover:scale-105 duration-300"
          >
            🔄 Choose Another System
          </button>
        </div>
      )}

      <Link
        to="/home"
        className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
