export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 text-center"
    >
      <h2 className="text-5xl font-bold mb-10">
        Contact
      </h2>

      <div className="space-y-4">
        <p className="text-xl">
           abhijitsharma.ab@gmail.com
        </p>

        <p className="text-xl">
           +91 9305382844
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/abhijit-sharma-7b21ab296"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/abhijit1620"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}