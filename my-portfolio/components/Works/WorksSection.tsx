import WorkCard from "./WorkCard";

const works = [
  {
    title: "Project A",
    slug: "project-a",
    image: "/product1.png",
    desc: "Motion Graphics / Visual",
    type: "internal",
  },
  {
    title: "Project B",
    slug: "project-b",
    image: "/product2.png",
    desc: "Creative Video",
    type: "internal",
  },
  {
    title: "Project Link (External)",
    image: "/product3.png",
    desc: "Landing Page",
    type: "external",
    url: "https://www.facebook.com/Thu.79.non",
  },
  {
    title: "Project D",
    slug: "project-d",
    image: "/product4.png",
    desc: "Creative Video",
    type: "internal",
  },
];

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
        {works.map((work, i) => (
          <WorkCard key={i} {...work} />
        ))}
      </div>
    </section>
  );
}
