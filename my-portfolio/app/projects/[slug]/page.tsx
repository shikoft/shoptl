import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) return notFound();

  const heroImage = project.heroImage ?? project.image;
  const overview = project.overview ?? project.content ?? project.desc;
  const highlights = project.highlights ?? [];
  const stackBreakdown = project.stackBreakdown ?? [];
  const techStack = project.meta?.tech ?? [];
  const infoCards = [
    ...(project.stats ?? []),
    ...(project.meta?.year
      ? [{ label: "Year", value: String(project.meta.year) }]
      : []),
    ...(project.meta?.role ? [{ label: "Role", value: project.meta.role }] : []),
  ];
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          {
            src: heroImage,
            alt: project.title,
            title: project.title,
            caption: project.desc,
          },
        ];

  return (
    <main className="project-page-bg min-h-screen overflow-hidden text-slate-100">
      <section className="relative border-b border-white/10">
        <div className="project-page-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(251,191,36,0.14),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Featured project
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-4 text-lg text-cyan-100/90 md:text-xl">
                {project.desc}
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                {overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#projects"
                  className="inline-flex items-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Back to projects
                </Link>

                <span className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200">
                  Case study preview
                </span>
              </div>

              {infoCards.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {infoCards.map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="project-panel rounded-3xl p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                        {item.label}
                      </p>
                      <p className="mt-3 text-lg font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="project-panel project-glow rounded-[2rem] p-3">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src={heroImage}
                    alt={project.title}
                    className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
                  />
                </div>
              </div>

              <div className="project-panel absolute -bottom-6 left-4 right-4 rounded-[1.5rem] p-5 sm:left-auto sm:right-6 sm:w-72">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Design direction
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Dark storefront styling, strong image-driven sections, and compact form layouts to keep the shop experience focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="project-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Project story
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Built as a full mini-shop experience
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              {project.content ?? overview}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Instead of showing only a homepage, this case study highlights the important screens that make the project feel complete: browsing products, ordering services, handling account actions, and supporting login or recovery flows.
            </p>
          </article>

          <div className="space-y-8">
            <article className="project-panel rounded-[2rem] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Tech stack
              </p>
              {stackBreakdown.length > 0 ? (
                <>
                  <div className="mt-5 space-y-4">
                    {stackBreakdown.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between gap-4 text-sm">
                          <span className="font-semibold text-white">
                            {item.name}
                          </span>
                          <span className="font-semibold text-cyan-100">
                            {item.share}
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#67e8f9_0%,#38bdf8_55%,#a3e635_100%)]"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {techStack.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {techStack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              ) : techStack.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="mt-5 inline-block text-sm text-slate-400">
                  Tech stack not added yet.
                </span>
              )}
            </article>

            {highlights.length > 0 && (
              <article className="project-panel rounded-[2rem] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Highlights
                </p>
                <ul className="mt-5 space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Visual gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Multiple screens from the project
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            The gallery below uses all captured screenshots to show how the shop keeps a consistent visual identity across landing, catalog, account, payment, admin, and authentication flows.
          </p>
        </div>

        <ProjectGallery gallery={gallery} />
      </section>
    </main>
  );
}
