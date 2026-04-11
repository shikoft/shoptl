"use client";

import { useEffect, useState } from "react";
import type { ProjectGalleryItem } from "@/data/projects";

type Props = {
  gallery: ProjectGalleryItem[];
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;
const WIDE_INDICES = [0, 4, 10, 14];

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

export default function ProjectGallery({ gallery }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const activeItem = activeIndex === null ? null : gallery[activeIndex];

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setZoom(MIN_ZOOM);
  };

  const closeViewer = () => {
    setActiveIndex(null);
    setZoom(MIN_ZOOM);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length);
    setZoom(MIN_ZOOM);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % gallery.length);
    setZoom(MIN_ZOOM);
  };

  const zoomIn = () => {
    setZoom((current) => clampZoom(current + ZOOM_STEP));
  };

  const zoomOut = () => {
    setZoom((current) => clampZoom(current - ZOOM_STEP));
  };

  const resetZoom = () => {
    setZoom(MIN_ZOOM);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + gallery.length) % gallery.length,
        );
        setZoom(MIN_ZOOM);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % gallery.length,
        );
        setZoom(MIN_ZOOM);
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoom((current) => clampZoom(current + ZOOM_STEP));
      }

      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setZoom((current) => clampZoom(current - ZOOM_STEP));
      }

      if (event.key === "0") {
        event.preventDefault();
        setZoom(MIN_ZOOM);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, gallery.length]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item, index) => {
          const wide = WIDE_INDICES.includes(index);
          const spanClass = wide
            ? index === 0
              ? "md:col-span-2"
              : "xl:col-span-2"
            : "";
          const imageClass = wide
            ? index === 0
              ? "h-80 md:h-[28rem]"
              : "h-80 xl:h-[24rem]"
            : "h-72";

          return (
            <article
              key={item.src}
              className={`project-panel group overflow-hidden rounded-[2rem] ${spanClass}`}
            >
              <button
                type="button"
                onClick={() => openViewer(index)}
                className="block w-full cursor-zoom-in overflow-hidden border-b border-white/10 text-left"
                aria-label={`Open image: ${item.title}`}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${imageClass}`}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-5 py-5 opacity-90 transition duration-300 group-hover:opacity-100">
                    <span className="inline-flex rounded-full border border-cyan-300/25 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      Click to expand
                    </span>
                  </div>
                </div>
              </button>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.caption}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[120] bg-slate-950/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeViewer}
        >
          <div
            className="flex h-full flex-col px-4 py-4 sm:px-6 lg:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Image viewer
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={zoomOut}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Zoom out
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/25"
                >
                  Zoom in
                </button>
                <button
                  type="button"
                  onClick={closeViewer}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mx-auto mt-4 flex w-full max-w-7xl flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(2,8,23,0.45)]">
              <div className="flex-1 overflow-auto">
                <div className="flex min-h-full min-w-full items-center justify-center p-4 sm:p-6">
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    style={{ width: `${zoom * 100}%` }}
                    className="h-auto max-w-none rounded-[1.5rem] shadow-[0_30px_80px_rgba(2,8,23,0.55)]"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <p>
                Use the buttons or keyboard: `&larr;` `&rarr;` to switch, `+`
                `-` to zoom, `0` to reset, `Esc` to close.
              </p>
              <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-cyan-100">
                Zoom {Math.round(zoom * 100)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}