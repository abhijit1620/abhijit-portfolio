"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-cyan-400">
          Abhijit Sharma
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-cyan-400 transition">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Hire me
          </a>
        </div>

        <button
          className="md:hidden text-gray-200"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-200">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-center"
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}
