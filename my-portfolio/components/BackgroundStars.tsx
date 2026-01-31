"use client";

export default function BackgroundStars() {
  return (
    <div className="night">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="shooting_star" />
      ))}
    </div>
  );
}
