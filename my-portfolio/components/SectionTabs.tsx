"use client";
import { useState } from "react";
import WorksSection from "./Works/WorksSection";
import TechStack from "./TechStack";
import ContactSection from "./ContactSection";

export default function SectionTabs() {
  const [active, setActive] = useState("projects");

  const tabStyle = (id: string) =>
    `px-6 py-3 border-2 rounded-xl font-semibold transition
     ${
       active === id
         ? "border-cyan-400 text-cyan-400"
         : "border-black text-black hover:border-cyan-400 hover:text-cyan-400"
     }`;

  return (
    <section className="py-24 bg-white text-black">
      <div className="flex justify-center gap-6 mb-12">
        <button className={tabStyle("projects")} onClick={() => setActive("projects")}>
          PROJECTS
        </button>
        <button className={tabStyle("tech")} onClick={() => setActive("tech")}>
          TECH STACK
        </button>
        <button className={tabStyle("contact")} onClick={() => setActive("contact")}>
          CONTACT ME
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {active === "projects" && <WorksSection />}
        {active === "tech" && <TechStack />}
        {active === "contact" && <ContactSection />}
      </div>
    </section>
  );
}
