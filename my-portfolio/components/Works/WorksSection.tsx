import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";

export default function WorksSection() {
  return (
    <section id="projects" className="bg-white py-24">
      <h2 className="text-4xl font-bold text-center text-cyan-500 mb-14">
        PROJECTS
      </h2>

      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        {projects.map((work, i) => (
          <WorkCard key={i} {...work} />
        ))}
      </div>
    </section>
  );
}

