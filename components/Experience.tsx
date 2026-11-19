const jobs = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2026 - Present",
    points: [
      "Built and run Reborn: logistics platform with a web control room, Android driver app and cloud backend.",
      "Live GPS tracking, route planning, barcode scanning and photo proof of delivery in production.",
      "Own the full stack: Flutter, Django, PostgreSQL, AWS deployment and Play Store release.",
    ],
  },
  {
    company: "Ethara.AI",
    role: "LLM Post-Training Intern",
    period: "Jan 2026 - Apr 2026",
    points: [
      "Fine-tuned Large Language Models (LLMs).",
      "Worked on prompt engineering and response optimization.",
      "Improved model alignment and evaluation pipelines.",
      "Enhanced response quality through iterative feedback loops.",
    ],
  },
  {
    company: "Zidio Development",
    role: "Data Science & ML Intern",
    period: "Jun 2025 - Oct 2025",
    points: [
      "Performed EDA and data cleaning.",
      "Built Machine Learning models.",
      "Worked on feature engineering pipelines.",
      "Evaluated models using performance metrics.",
    ],
  },
  {
    company: "HCLTech",
    role: "Data Engineering & Visualization Intern",
    period: "Oct 2024 - Mar 2025",
    points: [
      "Built ETL pipelines using Python.",
      "Designed Data Warehouse star schema models.",
      "Created Power BI dashboards.",
      "Worked on analytical reporting systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {jobs.map((j) => (
          <div
            key={j.company}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold">{j.company}</h3>
            <p className="text-cyan-400 mt-1">
              {j.role} | {j.period}
            </p>
            <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
              {j.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
