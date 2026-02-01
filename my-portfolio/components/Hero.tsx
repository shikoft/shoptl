import BackgroundStars from "./BackgroundStars";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center text-white">
      <BackgroundStars />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hi! Welcome To My Profile
        </h1>
        <p className="text-xl">
          My Name Is Luu Tan Loc <span className="text-cyan-400">SHIKOFT</span>
        </p>
      </div>
    </section>
  );
}
