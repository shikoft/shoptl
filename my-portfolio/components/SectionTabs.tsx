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
      shrink-0
      px-4 py-2
      md:px-10 md:py-4
      rounded-xl
      font-semibold md:font-bold
      text-sm md:text-base
      border-2
      transition-all duration-300
      ${
        active === id
          ? "bg-cyan-400 text-white border-cyan-400 shadow-lg"
          : "bg-white text-cyan-500 border-cyan-400 hover:bg-cyan-50"
      }
    `;

  return (
    <section
      id="section-tabs"
      className="
        py-24
        bg-white
        text-black
        min-h-[70vh]
      "
    >
      {/* TAB BUTTONS */}
      <div
        className="
          flex
          flex-row
          justify-start md:justify-center
          gap-3 md:gap-6
          mb-16
          px-4
          overflow-x-auto
          whitespace-nowrap
        "
      >
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
      <div className="max-w-6xl mx-auto px-6">
        {active === "projects" && <WorksSection />}
        {active === "tech" && <TechStack />}
        {active === "contact" && <ContactSection />}
      </div>
    </section>
  );
}
