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
      px-6 py-2
      rounded-full
      font-bold
      text-sm
      transition-all duration-200
      ${
        active === id
          ? "bg-cyan-400 text-white shadow-md"
          : "bg-white text-cyan-500 border border-cyan-400 hover:bg-cyan-50"
      }
    `;

  return (
    <section
      id="projects"
      className="
        py-24
        bg-white
        text-black
      "
    >
      {/* BUTTON TABS */}
      <div className="flex justify-center gap-4 mb-14">
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

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6">
        {active === "projects" && <WorksSection />}
        {active === "tech" && <TechStack />}
        {active === "contact" && <ContactSection />}
      </div>
    </section>
  );
}

