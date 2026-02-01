"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <span className="font-bold text-cyan-400">SHIKOFT</span>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#tech" className="hover:text-cyan-400">Tech Stack</a>
          <a href="#contact" className="hover:text-cyan-400">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
