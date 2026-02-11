"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";

export default function WorksSection() {
  const listVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="bg-white py-24">
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-500 mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        PROJECTS
      </motion.h2>

      <motion.div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, i) => {
          const href = project.externalLink
            ? project.externalLink
            : project.slug
              ? `/projects/${project.slug}`
              : undefined;
          const external = Boolean(project.externalLink);

          return (
            <motion.div
              key={project.slug ?? project.title ?? i}
              variants={itemVariants}
            >
              <WorkCard
                title={project.title}
                image={project.image}
                desc={project.desc}
                href={href}
                external={external}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
