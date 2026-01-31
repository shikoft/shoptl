"use client";
import { motion } from "framer-motion";

const works = [
  {
    title: "Project A",
    image: "/product1.png",
    desc: "Motion Graphics / Visual Design"
  },
  {
    title: "Project B",
    image: "/product2.png",
    desc: "Creative Video / Animation"
  },
  // 👉 THÊM SẢN PHẨM MỚI Ở ĐÂY
  {
    title: "Project C",
    image: "/product3.png",
    desc: "Web Design / Frontend",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-14 text-primary">
        WORKS
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {works.map((work, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-[300px] object-cover"
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0 bg-black/60
              opacity-0 group-hover:opacity-100
              transition duration-300
              flex flex-col justify-center items-center text-center
            ">
              <h3 className="text-2xl font-bold text-white mb-2">
                {work.title}
              </h3>
              <p className="text-graysoft mb-4">{work.desc}</p>

              <button className="
                px-6 py-2 rounded-full
                border border-primary
                text-primary
                hover:bg-primary hover:text-black
                transition duration-300
              ">
                More info
              </button>
              <button
                className="
                  px-8 py-3 rounded-full
                  bg-primary text-black font-semibold
                  hover:bg-black hover:text-primary
                  transition-all duration-300
                "
              >
                View more
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}