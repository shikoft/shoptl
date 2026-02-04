"use client";

import { motion } from "framer-motion";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
];

export default function TechStack() {
  const listVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.06 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="tech"
      className="bg-white py-24"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-cyan-500"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        TECH STACK
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techs.map((tech) => (
          <motion.div
            key={tech}
            className="
              border border-black
              rounded-xl
              py-10
              text-center
              font-semibold
              hover:bg-black hover:text-white
              transition
            "
            variants={itemVariants}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
