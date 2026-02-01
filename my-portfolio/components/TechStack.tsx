const techs = [
  "html","css","js","react","next","tailwind"
];

export default function TechStack() {
  return (
    <div
      id="tech"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center"
    >
      {techs.map(t => (
        <img
          key={t}
          src={`/icons/${t}.svg`}
          className="w-20 h-20 transition hover:scale-125"
          alt={t}
        />
        <img
          key={t}
          src={`/icons/${t}.svg`}
          className="w-20 h-20 transition hover:scale-125"
          alt="Js"
        />
      ))}
    </div>
  );
}
