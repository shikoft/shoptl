"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Comment = {
  name: string;
  message: string;
  createdAt: number;
};

export default function ContactSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/comments");
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data?.error || "Failed to load comments.");
        }
        if (mounted) {
          setComments(data.comments ?? []);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setComments([]);
          const message =
            err instanceof Error ? err.message : "Failed to load comments.";
          setError(message);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const handleSend = () => {
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage || sending) return;

    const run = async () => {
      setSending(true);
      setError(null);
      try {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            message: trimmedMessage,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.comment) {
          throw new Error(data?.error || "Failed to send comment.");
        }
        setComments((prev) => [data.comment, ...prev]);
        setName("");
        setMessage("");
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to send comment.";
        setError(message);
      } finally {
        setSending(false);
      }
    };

    run();
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20 bg-white text-black overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-500 mb-14"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        CONTACT ME
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT INFO */}
        <motion.div
          className="flex flex-col gap-6 items-center md:items-stretch"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {[
            { icon: "✉️", value: "luutanloc39@gmail.com" },
            { icon: "📠", value: "0123 456 789" },
            { icon: "GitHub", value: "github.com/shikoft" },
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
        </motion.div>

        {/* RIGHT COMMENT */}
        <motion.div
          className="md:col-span-2 w-full"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="bg-gray-100 rounded-2xl p-6 mb-10">
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}
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
              disabled={sending}
              className="px-8 py-3 rounded-xl bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
            {loading && (
              <div className="text-sm text-gray-500">
                Loading comments...
              </div>
            )}
            {!loading && comments.length === 0 && (
              <div className="text-sm text-gray-500">
                No comments yet.
              </div>
            )}
            {comments.map((c, i) => (
              <div key={`${c.createdAt}-${i}`} className="border rounded-xl p-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-cyan-500">
                    {c.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(c.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                <p className="text-gray-700 text-sm break-words">
                  {c.message}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
