"use client";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        TECH STACK
      </h2>

      <div
        id="tech"
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6
          gap-8 justify-items-center
        "
      >
        {techs.map((tech) => (
          <div
            key={tech}
            className="
              w-28 h-28 flex items-center justify-center
              border-2 border-cyan-400 rounded-xl
              text-lg font-semibold
              transition-all duration-300
              hover:scale-110 hover:bg-cyan-400 hover:text-black
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
