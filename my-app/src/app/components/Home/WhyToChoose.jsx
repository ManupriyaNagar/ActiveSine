import React from 'react';
import { FaCheckCircle, FaBolt, FaHandsHelping } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue">Why Choose Us</h2>
        
        {/* Marquee Section
        <div className="mb-8">
          <marquee className="text-xl text-blue-600">
            Committed to excellence in electrical engineering solutions!
          </marquee>
        </div> */}

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue">Quality Assurance</h3>
            <p className="text-gray-600 text-center">
              Our solutions meet the highest standards of quality and safety.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaBolt className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue">High Performance</h3>
            <p className="text-gray-600 text-center">
              Experience unmatched efficiency and performance in our electrical systems.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaHandsHelping className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue">Dedicated Support</h3>
            <p className="text-gray-600 text-center">
              We provide comprehensive support and after-sales service to ensure your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
