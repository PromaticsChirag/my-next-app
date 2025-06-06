"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bikes = [
    {
      name: "Speedster 5000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      description: "Engineered for speed demons and adrenaline junkies. This aerodynamic marvel features carbon fiber construction, precision engineering, and cutting-edge technology that delivers unmatched performance on every ride.",
      price: "$2,999",
      category: "Road Bike",
      specs: ["Carbon Fiber Frame", "22-Speed Shimano", "Aerodynamic Design", "Racing Tires"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "GT 650",
      image: "https://images.unsplash.com/photo-1544191696-15693072f5e6?w=800&h=600&fit=crop&crop=center",
      description: "Built to conquer mountains and dominate trails. This rugged beast combines superior suspension, all-terrain capability, and unbreakable durability for the ultimate off-road adventure experience.",
      price: "$3,499",
      category: "Mountain Bike",
      specs: ["Full Suspension", "All-Terrain Tires", "Hydraulic Brakes", "Shock Absorbers"],
      gradient: "from-red-500 to-orange-600"
    },
    {
      name: "Urban Comet",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center",
      description: "The future of urban mobility. This sleek electric powerhouse combines sustainable technology with sophisticated design, offering effortless commuting and eco-friendly transportation in style.",
      price: "$1,899",
      category: "E-Bike",
      specs: ["Electric Motor", "60km Range", "Smart Display", "USB Charging"],
      gradient: "from-orange-600 to-red-500"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Premium Performance",
      description: "Experience unmatched quality with our professional-grade bikes engineered for peak performance and durability."
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Every bike undergoes rigorous safety inspections and comes equipped with the latest safety technology and gear."
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Join the green revolution with our sustainable transportation solutions that reduce carbon footprint."
    },
    {
      icon: "🎯",
      title: "Expert Support",
      description: "Our certified technicians provide 24/7 support, maintenance, and guidance for your perfect ride."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Parallax Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,69,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,69,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <div className="relative z-10 px-4 sm:px-8 py-8">
        {/* Enhanced Header */}
        <header className="flex justify-between items-center mb-16 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl px-8 py-6 shadow-2xl shadow-orange-500/20">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
              🏍️
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Leo Bikes
              </h1>
              <p className="text-orange-300/60 text-sm font-medium">Ride Beyond Limits</p>
            </div>
          </div>
          <Link href="/">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 text-white">
              Logout
            </button>
          </Link>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Premium Bike Rentals
              </span>
            </div>
            <h2 className="text-6xl sm:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                Unleash Your
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Adventure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the thrill of premium cycling with our meticulously maintained fleet of high-performance bikes. 
              From lightning-fast road racers to mountain-conquering beasts, discover the perfect ride that matches your passion for adventure.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 text-white animate-pulse-glow">
              Start Your Journey
            </button>
            <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105">
              View Collection
            </button>
          </div>
        </div>

        {/* Enhanced Bike Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {bikes.map((bike, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20 transition-all duration-700 transform group-hover:scale-105 group-hover:shadow-orange-500/40 group-hover:border-orange-400/50">
                
                {/* Enhanced Badges */}
                <div className="absolute top-6 left-6 z-20">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${bike.gradient} text-white shadow-lg backdrop-blur-sm`}>
                    {bike.category}
                  </span>
                </div>

                <div className="absolute top-6 right-6 z-20">
                  <span className="px-4 py-2 rounded-full text-lg font-black bg-black/80 backdrop-blur-md text-orange-400 border border-orange-500/50 shadow-lg">
                    {bike.price}
                  </span>
                </div>

                {/* Image with Enhanced Effects */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${bike.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                      {bike.name}
                    </h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0 shadow-lg">
                      <span className="text-white text-xl font-bold">→</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {bike.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-6">
                    <h4 className="text-orange-400 font-bold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {bike.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-400">
                          <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-2"></span>
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link href={`/bikes/${index}`} className="flex-1">
                      <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r ${bike.gradient} hover:shadow-lg hover:shadow-orange-500/50 text-white text-lg`}>
                        Rent Now
                      </button>
                    </Link>
                    <button className="px-6 py-4 border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 rounded-xl font-bold transition-all duration-300">
                      Details
                    </button>
                  </div>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-[1px] animate-pulse">
                    <div className="w-full h-full bg-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-white mb-6">Why Choose Leo Bikes?</h3>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              We're not just a bike rental service - we're your gateway to extraordinary adventures and unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6 text-center hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 mb-20 shadow-2xl shadow-orange-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-gray-300 font-medium">Happy Riders</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-300 font-medium">Premium Bikes</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-300 font-medium">Cities Served</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-300 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="text-center">
          <div className="bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl shadow-orange-500/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-4xl">
                🏍️
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              &copy; {new Date().getFullYear()} Leo Bikes. Ride Beyond Limits. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium">Support</a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-60px) rotate(240deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-40px) rotate(-120deg); }
          66% { transform: translateY(-80px) rotate(-240deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 69, 0, 0.8), 0 0 60px rgba(255, 69, 0, 0.4); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}