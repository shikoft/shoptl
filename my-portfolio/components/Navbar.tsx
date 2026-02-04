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
      className={`nav-shell fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "nav-shell--scrolled bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      } animate-fade-in`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <a 
          href="/" 
          className="nav-brand font-bold text-cyan-400 text-lg"
        >
          SHIKOFT
        </a>
        <div className="flex gap-6 text-[16px] font-semibold">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#tech" className="nav-link">Tech Stack</a>
          <a href="#contact" className="nav-link">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
