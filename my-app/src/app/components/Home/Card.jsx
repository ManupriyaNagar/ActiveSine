'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-100 py-10 px-20 flex flex-col md:flex-row gap-10 justify-center items-center">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg py-10 h-[1/3] w-[1/3] md:w-1/3 px-10">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="Number"
            name="number"
            placeholder="Your Phone no"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border text-black rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded-lg hover:bg-green-500">
            Send Message
          </button>
        </form>
      </div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[2/3] w-[2/3] px-20">
        {[
          { city: 'Pune', address: 'Address ####' },
          { city: 'Mumbai', address: '%%%%%%%' },
          { city: 'Pune', address: '#####' },
          { city: 'Bangalore', address: '######' }
        ].map((office, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-64">
            <h3 className="text-lg font-semibold text-blue-600">{office.city}</h3>
            <p className="text-gray-600 text-sm mb-2">{office.address}</p>
            <p className="text-gray-800 font-bold mb-4">7798931936</p>
            <div className="flex gap-2">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Call</button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-gray-500">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
