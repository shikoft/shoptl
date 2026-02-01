"use client";
import { useState } from "react";
import Works from "./Works";
import TechStack from "./TechStack";
import Contact from "./Contact";

export default function SectionTabs() {
  const [active, setActive] = useState("projects");

  const tabStyle = (id: string) =>
    `px-6 py-3 border-2 rounded-xl font-semibold transition
     ${
       active === id
         ? "border-cyan-400 text-cyan-400"
         : "border-white text-white hover:border-cyan-400 hover:text-cyan-400"
     }`;

  return (
    <section className="mt-20">
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

      {active === "projects" && <Works />}
      {active === "tech" && <TechStack />}
      {active === "contact" && <Contact />}
    </section>
  );
}
