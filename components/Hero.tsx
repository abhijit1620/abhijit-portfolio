"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.jpg"
            alt="Abhijit Sharma"
            width={220}
            height={220}
            priority
            className="rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.7)]"
          />
        </div>

        <h1 className="text-7xl md:text-8xl font-bold">
          Abhijit Sharma
        </h1>

    
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Building AI powered applications using
          Machine Learning, Deep Learning,
          LLMs and Data Engineering.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20"
          >
            Contact
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          <div>
            <h2 className="text-4xl font-bold">2+</h2>
            <p className="text-gray-500">Publications</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">3</h2>
            <p className="text-gray-500">Internships</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">7.52</h2>
            <p className="text-gray-500">CGPA</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}