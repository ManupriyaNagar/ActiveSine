'use client'
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isHovered ? "bg-white shadow-lg py-3" : "bg-transparent py-6"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled || isHovered ? "text-gray-800" : "text-gray-900"
        }`}
      >
        {/* Logo */}
        <div className="w-10 h-10">
          <img src="./ACTIVESINE.jpg"></img>
        </div>

        {/* Navigation */}
        <nav
          className={`hidden md:flex items-center space-x-6 px-6 py-2 transition-all duration-500 ease-in-out ${
            isScrolled || isHovered
              ? "bg-transparent"
              : "bg-white rounded-full shadow-md"
          }`}
        >
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="#products" className="text-gray-800 hover:text-gray-600">
            SOLUTIONS
          </a>
          <a href="#solutions" className="text-gray-800 hover:text-gray-600">
            PRODUCTS
          </a>
          <a href="#partner" className="text-gray-800 hover:text-gray-600">
            SERVICES
          </a>
          <a href="#news" className="text-gray-800 hover:text-gray-600">
            NEWS
          </a>
          
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">

          {/* Contact Button */}
          <button
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold hover:opacity-90"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
