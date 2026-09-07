const projects = [
  {
    title: "AI NeuroAssist",
    desc: "Smart Communication System for Paralyzed Patients"
  },
  {
    title: "FusionNet",
    desc: "Multimodal Stress Detection using Deep Learning"
  },
  {
    title: "Fine–Tuned Python Coding Assistant",
    desc: "Qwen 2.5 LoRA Fine Tuning"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}