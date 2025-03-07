"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  Landmark,
  Car,
  TrainFront,
  BatteryCharging,
  Bolt,
  TrendingDown,
  FactoryIcon,
  Sliders,
  Settings,
} from "lucide-react";

const applications = [
  { icon: <Factory size={50} />, text: "Steel and Cement Industries" },
  { icon: <Landmark size={50} />, text: "Textile Industries" },
  { icon: <Sliders size={50} />, text: "Process Industries" },
  { icon: <Car size={50} />, text: "Automobile" },
  { icon: <TrainFront size={50} />, text: "Railway/Metro" },
  { icon: <BatteryCharging size={50} />, text: "Solar Farms" },
];

const problems = [
  { icon: <Bolt size={50} />, text: "Power Factor Improvement" },
  { icon: <TrendingDown size={50} />, text: "KVAH Billing Reduction" },
  { icon: <FactoryIcon size={50} />, text: "Captive Power PF Improvement" },
  { icon: <Sliders size={50} />, text: "Harmonics Mitigation" },
  { icon: <Settings size={50} />, text: "Drives Harmonic Mitigation" },
  { icon: <Factory size={50} />, text: "Unbalance Compensation" },
];

// Scroll Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
  }),
};

const PowerQualitySolutions = () => {
  return (
    <section className="relative w-full h-auto py-40 px-10 bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3.jpg"
          alt="Power Quality Solutions"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold">Power Quality Solutions</h1>

        {/* Sections Container */}
        <div className="mt-10 flex gap-10">
          {/* By Applications */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white pb-2">
              By Applications
            </h2>
            <div className="grid grid-cols-2 gap-6 flex-grow">
              {applications.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-blue-900 bg-opacity-40 rounded-lg flex flex-col items-center justify-center shadow-lg hover:bg-opacity-60 transition-all duration-300 h-full"
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="text-orange-300">{item.icon}</span>
                  <p className="mt-2 text-lg font-medium text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* White Vertical Divider */}
          <div className="w-[2px] bg-white"></div>

          {/* By Problems */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white pb-2">
              By Problems
            </h2>
            <div className="grid grid-cols-2 gap-6 flex-grow">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-blue-900 bg-opacity-40 rounded-lg flex flex-col items-center justify-center shadow-lg hover:bg-opacity-60 transition-all duration-300 h-full"
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="text-orange-300">{item.icon}</span>
                  <p className="mt-2 text-lg font-medium text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerQualitySolutions;
