"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = ((x / width) - 0.5) * 20; // Rotates left & right
    const rotateX = ((y / height) - 0.5) * -20; // Rotates up & down

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-white px-10 md:px-20 py-16 md:py-24">
      {/* Heading at the Top */}
      <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
        Safe And Efficient{" "}
        <span className="text-black underline decoration-medium-green">
          Energy Storage Solutions
        </span>
      </h1>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-lg text-para">
            Driving The Global Transition To Cleaner, Greener Energy
          </p>

          {/* Solutions List */}
          <div className="mt-6 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-blue font-semibold text-lg flex items-center"
            >
              Residential Energy Storage Solution
            </motion.div>
            <p className="text-grey-blue">
              Using Dyness home energy storage products can save you money, cope
              with power outages, and keep your appliances running 24/7,
              providing you with worry-free electricity use.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-grey-blue font-semibold text-lg"
            >
              C&I Energy Storage Solution
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-grey-blue font-semibold text-lg"
            >
              Centralised Energy Storage Station Solution
            </motion.div>
          </div>

          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-green hover:bg-dark-green text-white font-semibold rounded-lg transition"
          >
            Read More →
          </motion.button>
        </div>

        {/* Right Image with Hover Effect */}
        <motion.div
          className="relative flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
  style={{
    perspective: "1000px",
  }}
  animate={{
    rotateX: rotateX * 1.5, // Increased rotation effect
    rotateY: rotateY * 1.5, // Increased rotation effect
    scale: 1.05, // Slight scale effect
  }}
  transition={{
    type: "spring",
    stiffness: 200, // Faster spring animation
    damping: 10, // Reduces delay
  }}
  className="shadow-xl rounded-lg overflow-hidden transition-transform duration-150 ease-out"
>
  <Image
    src="/5.jpg" // Replace with the correct image path
    alt="Energy Storage Solution"
    width={600}
    height={400}
    className="w-full max-w-lg rounded-lg"
  />
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
