"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  image: string;
  desc: string;
};

export default function WorkCard({ title, image, desc }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        group relative overflow-hidden
        rounded-2xl bg-white shadow-lg
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        className="w-full h-[220px] md:h-[260px] object-cover"
      />

      {/* DESKTOP OVERLAY (hover only) */}
      <div
        className="
          hidden md:flex
          absolute inset-0 bg-black/60
          opacity-0 group-hover:opacity-100
          transition duration-300
          flex-col items-center justify-center text-center
        "
      >
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-graysoft text-sm mb-4">{desc}</p>

        <button
          className="
            px-6 py-2 rounded-full
            bg-primary text-black font-semibold
            hover:bg-black hover:text-primary
            transition-all duration-300
          "
        >
          View more
        </button>
      </div>

      {/* MOBILE CONTENT (luôn hiện) */}
      <div className="md:hidden p-5">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{desc}</p>

        <button
          className="
            px-5 py-2 rounded-full
            bg-primary text-black font-semibold
            hover:bg-black hover:text-primary
            transition-all duration-300
          "
        >
          View more
        </button>
      </div>
    </motion.div>
  );
}
