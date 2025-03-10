import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "APFC Panel",
    description: "Automatic Power Factor Correction Panels for improved efficiency.",
    image: "/Activepanel.jpg",
  },
  {
    id: 2,
    name: "Active Harmonic Filters",
    description: "Reduces harmonic distortion and improves power quality.",
    image: "/Activepanel.jpg",
  },
  {
    id: 3,
    name: "Servo Voltage Stabilizer",
    description: "Ensures stable voltage supply for sensitive equipment.",
    image: "/Activepanel.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="relative min-h-screen p-8 flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ASB.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white/80 p-12 rounded-xl shadow-lg w-full max-w-5xl mx-auto mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Products</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore our advanced power quality solutions designed for various industries.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-t-xl" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
