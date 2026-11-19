const groups = [
  { title: "Apps & Web", items: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend & Cloud", items: ["Python", "Django", "FastAPI", "PostgreSQL", "AWS", "Docker"] },
  { title: "AI & ML", items: ["PyTorch", "TensorFlow", "LLM fine-tuning (LoRA)", "RAG / LangGraph", "Computer Vision", "GenAI"] },
  { title: "Data", items: ["SQL", "Power BI", "ETL pipelines", "Pandas", "Data modelling"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {groups.map((g) => (
          <div key={g.title} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-cyan-400 transition">
            <h3 className="text-lg font-bold text-cyan-300">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
