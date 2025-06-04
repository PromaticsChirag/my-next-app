"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const bikes = [
    {
      name: "Speedster 5000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      description: "A super-fast road bike designed for high performance and speed demons.",
      price: "$2,999",
      category: "Road Bike",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "TrailBlazer X",
      image: "https://images.unsplash.com/photo-1544191696-15693e32c5c4?w=800&h=600&fit=crop&crop=center",
      description: "A rugged mountain bike built for conquering the toughest trails.",
      price: "$3,499",
      category: "Mountain Bike",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Urban Comet",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center",
      description: "A sleek, electric bike perfect for stylish city commuting.",
      price: "$1,899",
      category: "E-Bike",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 py-10 text-white">
        {/* Header with glassmorphism */}
        <header className="flex justify-between items-center mb-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
              🏍️
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Leo Bikes
            </h1>
          </div>
          <Link href="/">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Logout
            </button>
          </Link>
        </header>

        {/* Hero Section with enhanced animations */}
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Discover the Ride
              <br />
              <span className="text-white">of Your Dreams</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our premium collection of bikes designed for every adventure—whether you're a speed enthusiast, trail explorer, or city commuter. Experience the future of cycling.
            </p>
          </div>
          
          {/* Floating action button */}
          <div className="mt-10">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 animate-bounce-slow">
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Enhanced Bike Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bikes.map((bike, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-3xl">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${bike.gradient} text-white shadow-lg`}>
                    {bike.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-sm font-bold bg-black/50 backdrop-blur-md text-white border border-white/20">
                    {bike.price}
                  </span>
                </div>

                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${bike.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {bike.name}
                    </h3>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {bike.description}
                  </p>

                  {/* Action Button */}
                  <Link href={`/bikes/${index}`} className="block">
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r ${bike.gradient} hover:shadow-lg text-white`}>
                      Explore Details
                    </button>
                  </Link>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${bike.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white/70">Happy Riders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white/70">Bike Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
              <div className="text-white/70">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-white/70">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-white/60 mb-4">
              &copy; {new Date().getFullYear()} Leo Bikes. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Terms</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}