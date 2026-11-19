import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const btn =
  "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s build something</h2>
      <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
        Have a project, an app idea or a role in mind? Message me. I usually reply within a day.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4">
        <a
          href="mailto:abhijitsharma.ab@gmail.com?subject=Project%20enquiry"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          <Mail size={18} /> abhijitsharma.ab@gmail.com
        </a>
        <a href="tel:+919305382844" className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-cyan-400">
          <Phone size={18} /> +91 9305382844
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a href="https://wa.me/919305382844" target="_blank" rel="noopener noreferrer" className={btn}>
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/abhijit-sharma-7b21ab296" target="_blank" rel="noopener noreferrer" className={btn}>
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/abhijit1620" target="_blank" rel="noopener noreferrer" className={btn}>
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
