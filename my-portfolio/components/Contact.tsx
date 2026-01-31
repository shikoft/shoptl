"use client";

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
    <section className="py-24 bg-dark text-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">
        CONTACT
      </h2>

      <p className="text-graysoft mb-10">
        If you are interested, feel free to contact me
      </p>

      <div className="flex flex-col items-center gap-6">

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

      </div>
    </section>
  );
}
