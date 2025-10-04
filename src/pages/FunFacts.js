
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/funfacts-bg.jpg"; // your background image
import Navbar from "../components/NavBar";
const facts = [
  "Your brain uses about 20% of your body’s oxygen and calories.",
  "The human heart beats about 100,000 times a day.",
  "The human body contains enough carbon to make 900 pencils.",
  "The surface area of your lungs is roughly the size of a tennis court!",
  "Your stomach gets a new lining every few days to avoid digesting itself.",
  "Bones are about 5 times stronger than steel of the same density.",
  "The human body has over 600 muscles.",
  "Your blood travels about 12,000 miles every day.",
  "The liver can regenerate itself completely even after surgical removal.",
  "The human body has over 100,000 km of blood vessels.",
  "Your skin is the largest organ in your body.",
  "The strongest muscle in the human body is the masseter (jaw).",
  "Humans shed about 600,000 particles of skin every hour.",
  "Your brain contains around 86 billion neurons.",
  "A human sneeze can travel up to 100 mph.",
  "Your hair grows about 1 cm per month on average.",
  "The small intestine is about 22 feet long.",
  "Bones are constantly being broken down and rebuilt.",
  "Your eyes can distinguish about 10 million colors.",
  "The human body contains enough iron to make a small nail.",
  "The cornea is the only part of the body with no blood supply.",
  "Your fingernails grow faster than your toenails.",
  "You have about 2 to 5 million sweat glands.",
  "The human brain generates around 20 watts of electricity.",
  "Saliva contains a natural painkiller called opiorphin.",
  "Your body has more bacteria than human cells.",
  "The tongue is covered in about 8,000 taste buds.",
  "The average human brain weighs about 3 pounds.",
  "Your heart creates enough pressure to squirt blood 30 feet.",
  "Humans are the only animals that blush.",
  "The human nose can detect over 1 trillion scents.",
  "Your stomach acid is strong enough to dissolve metal.",
  "The adult human body has 206 bones.",
  "You produce about 1 to 1.5 liters of saliva daily.",
  "The human body contains enough DNA to stretch from the sun to Pluto and back.",
  "Your body replaces about 1% of skin cells every day.",
  "The human body has about 5 liters of blood.",
  "The strongest bone in the human body is the femur.",
  "The brain uses more energy than any other organ.",
  "Humans are born with 300 bones, some fuse over time.",
  "Your liver performs over 500 functions.",
  "The average human body contains enough fat to make 7 bars of soap.",
  "The left lung is smaller than the right to make room for the heart.",
  "Your body has about 60,000 miles of blood vessels.",
  "Your intestines are home to trillions of bacteria.",
  "The heart pumps about 2,000 gallons of blood every day.",
  "Humans have a unique tongue print like fingerprints.",
  "Your body produces about 25 million new cells per second.",
  "The human eye can detect a candle from 30 miles away.",
  "Your body has enough potassium to fire a toy cannon.",
  "The human body can survive without food for weeks, but only a few days without water.",
];

export default function FunFacts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <Navbar />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-lg text-center">
        Fun Facts About the Human Body 💡
      </h1>

      <div
        onClick={handleNextFact}
        className="relative cursor-pointer p-10 rounded-3xl shadow-2xl bg-white bg-opacity-20 backdrop-blur-md max-w-3xl text-center transform hover:scale-105 transition-all duration-500"
      >
        <span className="text-yellow-300 font-bold text-xl">{currentIndex + 1}.</span>
        <p className="mt-4 text-lg md:text-xl text-white">{facts[currentIndex]}</p>

        <p className="mt-6 text-sm text-gray-300 italic">
          Click anywhere on this card to see the next fact
        </p>

        {/* Decorative glowing border */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 opacity-60 blur-xl -z-10"></div>
      </div>

      <Link
        to="/home"
        className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
