"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home, BatteryCharging, Monitor } from "lucide-react"; // Icons

const data = [
  {
    image: "/power-quality.jpg",
    heading: "Home Energy Storage Systems",
    text: "Dyness home energy storage systems cater to both low and high voltage needs...",
  },
  {
    image: "/3.jpg",
    heading: "C&I Energy Storage Systems",
    text: "Ideal for commercial and industrial needs, offering scalable energy solutions...",
  },
  {
    image: "/power-quality.jpg",
    heading: "Dyness Smart APP",
    text: "Monitor and manage your energy storage systems with real-time insights...",
  },
  {
    image: "/3.jpg",
    heading: "Grid-Connected Solutions",
    text: "Seamlessly integrate with the power grid for optimized energy management...",
  },
  {
    image: "/power-quality.jpg",
    heading: "Off-Grid Systems",
    text: "Reliable energy storage solutions for remote locations and backup power...",
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-start bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data[activeIndex].image}
          alt="Feature Image"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Content (Now Left-Aligned) */}
      <div className="relative z-10 max-w-2xl py-30 px-10 md:px-16 text-left">
        <motion.h1
          key={activeIndex}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl font-bold"
        >
          {data[activeIndex].heading}
        </motion.h1>

        <motion.p
          key={`text-${activeIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-sm"
        >
          {data[activeIndex].text}
        </motion.p>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-600 text-white rounded-lg transition"
        >
          ➜ Read More
        </motion.button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="flex gap-8 border-b-2 border-white">
          {[
            { icon: <Home />, text: "Home" },
            { icon: <BatteryCharging />, text: "Energy" },
            { icon: <Monitor />, text: "Computer" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center text-white px-4 pb-2 relative transition-all duration-300 group"
            >
              {item.icon}
              <span className="mt-1">{item.text}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent transition-all duration-300 group-hover:bg-white"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
