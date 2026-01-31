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
          Xin chào, tôi là <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-gray-400 text-xl">
          Web Developer • Designer • Creator
        </p>
      </motion.div>
    </section>
  );
}
