"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-primary cursor-pointer">
          SHIKOFT
        </div>

        {/* MENU */}
        <div className="flex gap-8 text-sm font-medium">
          {[
            { label: "Projects", id: "projects" },
            { label: "Tech Stack", id: "tech" },
            { label: "Contact Me", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative text-white/80
                hover:text-primary
                transition duration-300
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px]
                after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
