"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-screen filter blur-2xl opacity-15"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mix-blend-screen filter blur-2xl opacity-15"></div>
      </div>

      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,69,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,69,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Bike Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 text-orange-500">🏍️</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 text-red-500">🚴</div>
      <div className="absolute top-1/3 right-20 text-5xl opacity-20 text-orange-400">🚲</div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        {/* Enhanced Header */}
        <header className="absolute top-0 left-0 w-full p-8 flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
            🏍️
          </div>
          <div>
            <span className="text-white text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Leo Bikes
            </span>
            <p className="text-orange-300/60 text-sm font-medium">Ride Beyond Limits</p>
          </div>
        </header>

        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Welcome Back
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Ready to Ride?
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Sign in to your account and unlock access to our premium fleet of high-performance bikes. 
            Your next adventure awaits!
          </p>
        </div>

        {/* Enhanced Login Card */}
        <div className="w-full max-w-lg bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl border border-orange-500/30 p-10 shadow-2xl shadow-orange-500/20 text-white">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/50">
                <span className="text-4xl">🏍️</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-xl opacity-30"></div>
            </div>
          </div>

          <h2 className="text-3xl font-black text-center mb-3 text-white">
            Welcome Back, Rider!
          </h2>
          <p className="text-center text-gray-400 mb-10 text-lg">
            Sign in to continue your journey
          </p>

          <div className="space-y-8">
            {/* Email Field */}
            <div className="relative group">
              <label
                htmlFor="email"
                className="block text-lg text-orange-300 mb-3 font-semibold"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-6 py-4 pl-14 rounded-2xl bg-black/50 border-2 border-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:bg-black/70 placeholder-gray-500 text-white text-lg transition-all duration-300 hover:border-orange-400/50"
                  placeholder="your@email.com"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label
                htmlFor="password"
                className="block text-lg text-orange-300 mb-3 font-semibold"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-6 py-4 pl-14 pr-14 rounded-2xl bg-black/50 border-2 border-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:bg-black/70 placeholder-gray-500 text-white text-lg transition-all duration-300 hover:border-orange-400/50"
                  placeholder="••••••••••"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 text-lg text-gray-300 cursor-pointer hover:text-white transition-colors duration-300">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg border-2 border-orange-500/50 bg-black/50 text-orange-500 focus:ring-orange-500 focus:ring-2 transition-all duration-300"
                />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-lg text-orange-400 hover:text-orange-300 transition-colors duration-300 font-semibold">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              onClick={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                try {
                  const query = new URLSearchParams({ email, password }).toString();
                  const res = await fetch(
                    `${process.env.NEXT_PUBLIC_LOCALHOST_URL}user/getUsers?${query}`,
                    {
                      method: "GET",
                      headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN}`,
                      },
                    }
                  );

                  const data = await res.json();

                  if (data.code === 200) {
                    router.push("/homepage");
                  } else {
                    alert("❌ " + (data.message || "Something went wrong!"));
                  }
                } catch (error) {
                  console.error("API call error:", error);
                  alert("Something went wrong. Try again later.");
                } finally {
                  setIsLoading(false);
                }
              }}
              disabled={isLoading}
              className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 rounded-2xl transition-all duration-300 font-bold text-xl transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-white"
            >
              {isLoading ? (
                <>
                  <svg className="w-6 h-6 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In & Ride</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-orange-500/30"></div>
            <span className="px-6 text-gray-400 text-lg font-medium">or continue with</span>
            <div className="flex-1 border-t border-orange-500/30"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center space-x-3 py-4 px-4 bg-black/50 border-2 border-orange-500/30 rounded-2xl hover:bg-black/70 hover:border-orange-400/50 transition-all duration-300 group text-lg font-semibold">
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-3 py-4 px-4 bg-black/50 border-2 border-orange-500/30 rounded-2xl hover:bg-black/70 hover:border-orange-400/50 transition-all duration-300 group text-lg font-semibold">
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-white">Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-lg text-center text-gray-300">
            New to Leo Bikes?{" "}
            <Link href="/signup" className="text-orange-400 hover:text-orange-300 transition-colors font-bold">
              Create Your Account
            </Link>
          </p>
        </div>

        {/* Enhanced Footer */}
        <footer className="text-center mt-12">
          <div className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl px-8 py-6 shadow-2xl shadow-orange-500/20">
            <p className="text-gray-400 text-lg mb-3">
              &copy; {new Date().getFullYear()} Leo Bikes. Ride Beyond Limits. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8 text-base">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Support</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}