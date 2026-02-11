"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 text-center text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      © 2026 ShikoFT. All rights reserved.
    </motion.footer>
  );
}
