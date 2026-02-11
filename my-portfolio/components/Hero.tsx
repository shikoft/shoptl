"use client";
import BackgroundStars from "./BackgroundStars";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center justify-center
        text-white
        overflow-hidden
      "
    >
      {/* NỀN SAO – CHỈ Ở HERO */}
      <BackgroundStars />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in fade-delay-1">
          Hi! Welcome To My Profile
        </h1>

        <p className="text-lg md:text-xl animate-fade-in fade-delay-2">
          My Name Is Luu Tan Loc{" "}
          <span className="text-cyan-400 font-semibold">SHIKOFT</span>
        </p>
      </div>
    </section>
  );
}
