"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  desc: string;
  href?: string;
  external?: boolean;
};

export default function WorkCard({
  title,
  image,
  desc,
  href,
  external = false,
}: Props) {
  const Card = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      role={href ? "link" : undefined}
      className="
        group relative overflow-hidden
        rounded-2xl bg-white shadow-lg
        cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] md:h-[260px] object-cover"
      />

      {/* DESKTOP */}
      <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-graysoft text-sm mb-4">{desc}</p>
        <span className="px-6 py-2 rounded-full bg-primary text-black font-semibold">
          View more
        </span>
      </div>

      {/* MOBILE */}
      <div className="md:hidden p-5">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{desc}</p>
        <span className="px-5 py-2 rounded-full bg-primary text-black font-semibold">
          View more
        </span>
      </div>
    </motion.div>
  );

  if (!href) return Card;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {Card}
      </a>
    );
  }

  return <Link href={href}>{Card}</Link>;
}
