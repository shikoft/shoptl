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
    <section className="max-w-6xl mx-auto px-6 py-20 bg-white text-black overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-cyan-500 mb-14">
        CONTACT ME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT INFO */}
        <div className="flex flex-col gap-6 items-center md:items-stretch">
          {[
            { icon: "📧", value: "luutanloc39@gmail.com" },
            { icon: "📞", value: "0123 456 789" },
            { icon: "🐙", value: "github.com/shikoft" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                w-full
                border border-cyan-400/40
                rounded-xl px-6 py-5
                text-center
                hover:scale-105
                hover:border-cyan-500
                transition-all
              "
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-600 break-words">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COMMENT */}
        <div className="md:col-span-2 w-full">
          <div className="bg-gray-100 rounded-2xl p-6 mb-10">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              rows={4}
              className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleSend}
              className="px-8 py-3 rounded-xl bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition"
            >
              Send
            </button>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
            {comments.map((c, i) => (
              <div key={i} className="border rounded-xl p-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-cyan-500">
                    {c.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {c.date}
                  </span>
                </div>
                <p className="text-gray-700 text-sm break-words">
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
