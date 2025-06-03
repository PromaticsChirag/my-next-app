"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Make sure to install framer-motion

export default function HomePage() {
  const bikes = [
    {
      name: "Speedster 5000",
      image: "/images/bike1.jpg",
      description: "A super-fast road bike designed for high performance."
    },
    {
      name: "TrailBlazer",
      image: "/images/bike2.jpg",
      description: "A rugged mountain bike built for the toughest trails."
    },
    {
      name: "Urban Comet",
      image: "/images/bike3.jpg",
      description: "A sleek, electric bike perfect for city commuting."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-4 sm:px-8 py-10 text-white">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">🏍️ Leo Bikes</h1>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition">
            Logout
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Discover the Ride of Your Dreams
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Explore our top-rated bikes designed for every adventure—whether you're a speed enthusiast, trail explorer, or city commuter.
        </p>
      </motion.div>

      {/* Bike Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bikes.map((bike, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={bike.image}
              alt={bike.name}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
              <p className="text-white/70">{bike.description}</p>
              <Link href={`/bikes/${index}`} className="inline-block mt-4 text-blue-400 hover:underline">
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-white/60 text-xs text-center mt-16">
        &copy; {new Date().getFullYear()} Leo Bikes. All rights reserved.
      </footer>
    </div>
  );
}
