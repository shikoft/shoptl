"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const email = "luutanloc39S@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.section
      className="py-24 bg-dark text-white text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        CONTACT
      </motion.h2>

      <motion.p
        className="text-graysoft mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        If you are interested, feel free to contact me
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        viewport={{ once: true, amount: 0.4 }}
      >

        {/* COPY EMAIL */}
        <button
          onClick={handleCopy}
          className="
            px-8 py-3 rounded-full border border-primary
            hover:bg-primary hover:text-black
            transition duration-300
            relative
          "
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>

        {/* DISCORD */}
        <a
          href="https://discord.com/invite/syzGsduhG2"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-3 rounded-full border border-primary
            hover:bg-primary hover:text-black
            transition duration-300
          "
        >
          Discord
        </a>

      </motion.div>
    </motion.section>
  );
}
