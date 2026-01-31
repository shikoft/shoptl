"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi! Welcome To My Profile <br>
          My Name Is Luu Tan Loc <span className="text-primary">SHIKOFT</span>
        </h1>
        <p className="text-gray-400 text-xl">
          Web Developer • Game Developer • Creator
        </p>
      </motion.div>
    </section>
  );
}



