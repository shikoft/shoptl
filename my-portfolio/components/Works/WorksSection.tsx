import WorkCard from "./WorkCard";

const works = [
  {
    title: "Project A",
    image: "/product1.png",
    desc: "Motion Graphics / Visual"
  },
  {
    title: "Project B",
    image: "/product2.png",
    desc: "Creative Video"
  }
];

export default function WorksSection() {
  return (
    <section className="py-24 bg-white text-black">
      <h2 className="text-4xl font-bold text-center text-primary mb-14">
        WORKS
      </h2>

      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
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
