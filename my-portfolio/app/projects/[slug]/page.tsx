import { notFound } from "next/navigation";
import Link from "next/link";

/**
 * Demo data
 * Sau này bạn có thể tách ra data/projects.ts
 */
const projects = [
  {
    slug: "project-a",
    title: "Project A",
    image: "/product1.png",
    desc: "Motion Graphics / Visual",
    content:
      "This project focuses on clean visual, smooth animation and storytelling.",
    externalLink: null,
  },
  {
    slug: "project-b",
    title: "Project B",
    image: "/product2.png",
    desc: "Creative Video",
    content:
      "A creative video project with dynamic transitions and rhythm-based motion.",
    externalLink: "https://youtube.com",
  },
];

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
      {/* HERO IMAGE */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-cyan-500 font-semibold mb-2">
          {project.desc}
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          {project.content}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4">
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition"
            >
              View External Project
            </a>
          )}

          <Link
            href="/#projects"
            className="px-6 py-3 rounded-xl border-2 border-cyan-400 text-cyan-500 font-bold hover:bg-cyan-50 transition"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
