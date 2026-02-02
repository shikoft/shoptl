import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section className="relative h-[50vh]">
        <img
          src={project.image}
          className="w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-cyan-500 font-bold mb-4">{project.desc}</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          {project.content}
        </p>

        <Link
          href="/#projects"
          className="inline-block px-6 py-3 rounded-xl border-2 border-cyan-400 text-cyan-500 font-bold hover:bg-cyan-50 transition"
        >
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}

