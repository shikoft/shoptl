"use client";

import { useState } from "react";

type Comment = {
  name: string;
  message: string;
  date: string;
};

export default function ContactSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !message) return;

    setComments([
      {
        name,
        message,
        date: new Date().toLocaleDateString("vi-VN"),
      },
      ...comments,
    ]);

    setName("");
    setMessage("");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        CONTACT ME
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* LEFT ICON PANEL */}
        <div className="flex md:flex-col gap-6 justify-center">
          {[
            { icon: "📧", label: "Email", value: "luutanloc39S@gmail.com" },
            { icon: "📞", label: "Phone", value: "0123 456 789" },
            { icon: "🐙", label: "GitHub", value: "github.com/shikoft" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group cursor-pointer
                border border-cyan-400/40
                rounded-xl px-6 py-5
                text-center
                hover:scale-110
                hover:border-cyan-400
                transition-all duration-300
              "
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-400 group-hover:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COMMENT AREA */}
        <div className="md:col-span-2">
          {/* INPUT */}
          <div className="bg-black/40 rounded-2xl p-6 mb-10">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-black border border-cyan-400/30 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              rows={4}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-black border border-cyan-400/30 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleSend}
              className="
                px-8 py-3 rounded-xl
                bg-cyan-400 text-black font-semibold
                hover:bg-white
                transition
              "
            >
              Send
            </button>
          </div>

          {/* COMMENTS */}
          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
            {comments.map((c, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-4"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-cyan-400">
                    {c.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {c.date}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  {c.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
