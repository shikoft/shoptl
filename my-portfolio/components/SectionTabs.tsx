"use client";

import { useState } from "react";
import WorksSection from "./Works/WorksSection";
import TechStack from "./TechStack";
import ContactSection from "./ContactSection";

type TabId = "projects" | "tech" | "contact";

export default function SectionTabs() {
  const [active, setActive] = useState<TabId>("projects");

  const tabStyle = (id: TabId) =>
    `
      relative px-6 py-3
      rounded-xl font-semibold
      border border-cyan-400/40
      transition-all duration-300
      ${
        active === id
          ? "text-cyan-400 border-cyan-400 scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          : "text-gray-400 hover:text-cyan-300 hover:border-cyan-300"
      }
    `;

  return (
    <section
      id="sections"
      className="
        relative
        py-24
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* TAB BUTTONS */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        <button
          className={tabStyle("projects")}
          onClick={() => setActive("projects")}
        >
          PROJECTS
        </button>

        <button
          className={tabStyle("tech")}
          onClick={() => setActive("tech")}
        >
          TECH STACK
        </button>

        <button
          className={tabStyle("contact")}
          onClick={() => setActive("contact")}
        >
          CONTACT ME
        </button>
      </div>

      {/* TAB CONTENT */}
      <div
        className="
          max-w-6xl mx-auto px-6
          transition-all duration-500
        "
      >
        {active === "projects" && (
          <div className="animate-fade-in">
            <WorksSection />
          </div>
        )}

        {active === "tech" && (
          <div className="animate-fade-in">
            <TechStack />
          </div>
        )}

        {active === "contact" && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}
      </div>
    </section>
  );
}
