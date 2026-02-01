import WorkCard from "./WorkCard";

const works = [
  {
    title: "Project A",
    image: "/product1.png",
    desc: "Motion Graphics / Visual",
  },
  {
    title: "Project B",
    image: "/product2.png",
    desc: "Creative Video",
  },
  {
    title: "Project C",
    image: "/product3.png",
    desc: "Motion Graphics / Visual",
  },
  {
    title: "Project D",
    image: "/product4.png",
    desc: "Creative Video",
  },
  {
    title: "Project E",
    image: "/product5.png",
    desc: "Game",
  },
];

export default function WorksSection() {
  return (
    <section
      id="projects"
      className="
        bg-white
        py-24
      "
    >
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-cyan-500 mb-14">
        PROJECTS
      </h2>

      {/* GRID */}
      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        {works.map((work, i) => (
          <WorkCard key={i} {...work} />
        ))}
      </div>
    </section>
  );
}
