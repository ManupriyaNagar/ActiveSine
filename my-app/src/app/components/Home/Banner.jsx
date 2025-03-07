'use client';
import React from "react";
import { motion } from "framer-motion"; // For smooth animation

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }} // Initial hidden state
      animate={{ opacity: 1, y: 0 }} // Smooth fade-in effect
      transition={{ duration: 1 }} // Animation duration
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }} // Add your image path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to <span className="text-green-400">ACTIVESINE</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Your reliable energy solutions provider
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">
          Get Started
        </button>
      </div>
    </motion.section>
  );
};

export default Banner;
