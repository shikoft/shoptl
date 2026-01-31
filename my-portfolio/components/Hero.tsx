"use client";
import { motion } from "framer-motion";
import BackgroundStars from "./BackgroundStars";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND */}
      <BackgroundStars />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi! Welcome To My Profile
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My Name Is Luu Tan Loc{" "}
          <span className="text-primary">SHIKOFT</span>
        </h2>

        <p className="text-gray-400 text-xl">
          Web Developer • Game Developer • Creator
        </p>
      </motion.div>
    </section>
  );
}
