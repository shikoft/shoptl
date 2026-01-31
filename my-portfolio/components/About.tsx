"use client";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Thu.79.non"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@HabyssTL"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@shikoliveuwu"
  }
];

export default function About() {
  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        
        {/* TEXT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-primary mb-6">
            ABOUT
          </h2>

          <h3 className="text-2xl font-bold mb-3">
            Luu Tan Loc / ShikoFT
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Video Creator / Motion Graphics Designer <br />
            Focus on clean visual, smooth animation and storytelling.
          </p>

          <div className="flex gap-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5 py-2 rounded-full
                  border border-primary
                  text-primary
                  hover:bg-primary hover:text-black
                  transition duration-300
                "
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* AVATAR */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-64 h-64 rounded-full border-4 border-primary"
          />
        </motion.div>

      </div>
    </section>
  );
}





