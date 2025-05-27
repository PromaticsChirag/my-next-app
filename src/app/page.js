"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] px-4 sm:px-6">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 text-white text-lg font-bold tracking-wide">
        Leo Bikes
      </header>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 shadow-xl text-white mt-20">
        <div className="flex justify-center mb-6">
          <Image
            src="/next.svg"
            alt="Logo"
            width={80}
            height={80}
            className="dark:invert"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Let’s Ride Buddy
        </h2>

        <form
          className="space-y-4"
          onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const name = email.split("@")[0]; // or ask for a name input if needed

          try {
            const res = await fetch("http://localhost:5000/user/createUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer 3a60e7428f3c7c56446a3025ba601624f849e80475dd452dfd36e2bb25032ca62526e5deeca708c100cb0158088cf90036fd671e8deca4bd325d486a8fbbddf6c65ca52e8db584e8df46d46478fa92085a0f36097f4d313e6256a2154de8f71bb73cef3fce1a25c6b767b9c4fe900d449ab0da6895f91f19ff89f878b5ea434f7bbc49a6d162fd9ef1e3f6c2ec511997ecc85d2e0f82a5a951ed4cc0743b18c91fd86b018e6c13f20f68a20fe27ae7f6f86b749b5e4c0ae5aebd35cca60e49d4",
              },
              body: JSON.stringify({ name, email }),
            });

            const data = await res.json();

            if (res.ok) {
              alert("✅ " + data.message || "User created successfully!");
            } else {
              alert("❌ " + data.message || "Something went wrong!");
            }
          } catch (error) {
            console.error("API call error:", error);
            alert("Something went wrong. Try again later.");
          }
        }}

        >
          <div>
            <label htmlFor="email" className="block text-sm text-white/80 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60 text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white/80 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60 text-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-white/70 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-white/60 text-xs text-center mt-10">
        &copy; {new Date().getFullYear()} Leo Bikes. All rights reserved.
      </footer>
    </div>
  );
}
