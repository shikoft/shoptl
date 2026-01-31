"use client";
import { useEffect, useState } from "react";

export default function BackgroundStars() {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 6 : 14;
    setStars(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="stars-bg">
      {stars.map((_, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
