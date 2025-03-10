"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg" // Change to your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Company Info */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Get in touch with **Activesine Electricals India Pvt Ltd** for your power quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Our Office</h2>
            <p className="text-gray-600 mt-2">Activesine Electricals India Pvt Ltd</p>
            <p className="text-gray-600">123, Industrial Area, New Delhi, India</p>
            <p className="text-gray-600 mt-2"><strong>Email:</strong> contact@activesine.com</p>
            <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="text-gray-600 mt-2">Providing power solutions since 2023.</p>
          </div>

          {/* Contact Form */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
