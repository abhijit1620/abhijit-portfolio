"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const stats = [
  { value: "1", label: "Live production platform" },
  { value: "3", label: "Internships" },
  { value: "2+", label: "Publications" },
  { value: "7.52", label: "CGPA" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to freelance projects & full-time roles
        </span>

        <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl font-bold">Abhijit Sharma</h1>

        <p className="mt-4 text-xl md:text-2xl text-cyan-300 font-semibold">Full-Stack & AI Developer</p>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          I build production web and mobile apps that run real businesses, and AI systems that make
          them smarter: from live fleet tracking to fine-tuned LLMs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Work with me
          </a>
          <a
            href="#work"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition"
          >
            See my work
          </a>
          <a
            href={asset("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition"
          >
            Resume
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <h2 className="text-4xl font-bold">{s.value}</h2>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
