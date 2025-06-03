"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
            console.log("Email:", email);
            const password = e.target.password.value;
            console.log("Password:", password);

            try {
              const query = new URLSearchParams({ email, password }).toString();
              const res = await fetch(
                `http://localhost:5000/user/getUsers?${query}`,
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
                // alert("✅ " + (data.message || "Logged in successfully!"));
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
            <label
              htmlFor="email"
              className="block text-sm text-white/80 mb-1"
            >
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
            <label
              htmlFor="password"
              className="block text-sm text-white/80 mb-1"
            >
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
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-white/60 text-xs text-center mt-10">
        &copy; {new Date().getFullYear()} Leo Bikes. All rights reserved.
      </footer>
    </div>
  );
}
