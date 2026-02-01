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
    <section
      id="tech"
      className="bg-white py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-cyan-500">
        TECH STACK
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
        {techs.map((tech) => (
          <div
            key={tech}
            className="
              border border-black
              rounded-xl
              py-10
              text-center
              font-semibold
              hover:bg-black hover:text-white
              transition
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
