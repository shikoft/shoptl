"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import WorksSection from "./Works/WorksSection";
import TechStack from "./TechStack";
import ContactSection from "./ContactSection";

type TabId = "projects" | "tech" | "contact";

export default function SectionTabs() {
  const [active, setActive] = useState<TabId>("projects");

  const handleTabClick = (id: TabId) => {
    setActive(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 20);
  };

  const tabStyle = (id: TabId) =>
    `
      tab-btn
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
        relative z-10
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
          flex-wrap
          justify-center
          gap-3 md:gap-6
          mb-16
          px-4
          pb-8
          overflow-visible
        "
      >
        <button
          className={tabStyle("projects")}
          onClick={() => handleTabClick("projects")}
          data-peek="projects"
        >
          <span className="tab-label">PROJECTS</span>
          <span className="tab-peek" />
        </button>

        <button
          className={tabStyle("tech")}
          onClick={() => handleTabClick("tech")}
          data-peek="tech"
        >
          <span className="tab-label">TECH STACK</span>
          <span className="tab-peek" />
        </button>

        <button
          className={tabStyle("contact")}
          onClick={() => handleTabClick("contact")}
          data-peek="contact"
        >
          <span className="tab-label">CONTACT ME</span>
          <span className="tab-peek" />
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {active === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <WorksSection />
            </motion.div>
          )}

          {active === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <TechStack />
            </motion.div>
          )}

          {active === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
