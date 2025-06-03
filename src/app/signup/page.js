"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 px-4 sm:px-6">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 text-white text-2xl font-extrabold tracking-wide drop-shadow-lg">
        Leo Bikes
      </header>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-10 shadow-2xl text-white mt-24">
        <div className="flex justify-center mb-8">
          <Image
            src="/next.svg"
            alt="Leo Bikes Logo"
            width={90}
            height={90}
            className="dark:invert"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
          Create Your Account
        </h2>

         <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const name = e.target.name.value;
            try {
              const res = await fetch(
                `http://localhost:5000/user/createUser`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, email, password }),
                }
              );

              const data = await res.json();
              console.log(
                "API response:",
                process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN,
                data
              );

              if (res.ok) {
                // alert("✅ " + (data.message || "Account Created Successfully!"));
                router.push("/");
              } else {
                alert("❌ " + (data.message || "Something went wrong!"));
              }
            } catch (error) {
              console.error("API call error:", error);
              alert("Something went wrong. Try again later.");
            }
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm text-white/90 mb-2 font-semibold">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-white/70 text-white transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-white/90 mb-2 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-white/70 text-white transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white/90 mb-2 font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-white/70 text-white transition"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-white/90 mb-2 font-semibold">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-white/70 text-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-xl font-bold transition shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white/80 mt-8 text-sm">
          Already have an account?{" "}
          <Link href="/" className="text-purple-400 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-white/60 text-xs text-center mt-16 mb-6">
        &copy; {new Date().getFullYear()} Leo Bikes. All rights reserved.
      </footer>
    </div>
  );
}
