"use client";

import { useState } from "react";
import { Mail, Github, Phone, MessageCircle } from "lucide-react";

type Comment = {
  name: string;
  message: string;
  date: string;
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSend = () => {
    if (!name || !message) return;

    const newComment: Comment = {
      name,
      message,
      date: new Date().toLocaleDateString("vi-VN"),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        CONTACT ME
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT: ICON CONTACT */}
        <div className="flex flex-col gap-6">
          <ContactItem icon={<Mail />} text="luutanloc39@gmail.com" />
          <ContactItem icon={<Github />} text="github.com/ShikoFT" />
          <ContactItem icon={<Phone />} text="+84 39 xxx xxxx" />
          <ContactItem icon={<MessageCircle />} text="Discord: shikoft" />
        </div>

        {/* RIGHT: COMMENT */}
        <div className="bg-dark rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Leave a message
          </h3>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full mb-3 px-4 py-2 rounded bg-black border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={4}
            className="w-full mb-4 px-4 py-2 rounded bg-black border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <button
            onClick={handleSend}
            className="
              px-6 py-2 rounded-full
              bg-cyan-400 text-black font-semibold
              hover:bg-white transition
            "
          >
            Send
          </button>

          {/* COMMENTS */}
          <div className="mt-8 space-y-4 max-h-[300px] overflow-y-auto">
            {comments.map((c, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/50 border border-gray-700"
              >
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>{c.name}</span>
                  <span>{c.date}</span>
                </div>
                <p className="text-gray-200">{c.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== CONTACT ITEM ===== */
function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="
        flex items-center gap-4
        p-4 rounded-xl border border-cyan-400/40
        hover:scale-105 hover:border-cyan-400
        transition-transform duration-300
        cursor-pointer
      "
    >
      <div className="text-cyan-400">{icon}</div>
      <span className="text-white">{text}</span>
    </div>
  );
}
