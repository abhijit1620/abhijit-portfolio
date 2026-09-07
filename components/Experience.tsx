export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">

        <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-2xl font-bold">
            Ethara.AI
          </h3>

          <p className="text-cyan-400 mt-1">
            LLM Post-Training Intern | Jan 2026 - Apr 2026
          </p>

          <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
            <li>Fine-tuned Large Language Models (LLMs).</li>
            <li>Worked on prompt engineering and response optimization.</li>
            <li>Improved model alignment and evaluation pipelines.</li>
            <li>Enhanced response quality through iterative feedback loops.</li>
          </ul>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-2xl font-bold">
            Zidio Development
          </h3>

          <p className="text-cyan-400 mt-1">
            Data Science & ML Intern | Jun 2025 - Oct 2025
          </p>

          <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
            <li>Performed EDA and data cleaning.</li>
            <li>Built Machine Learning models.</li>
            <li>Worked on feature engineering pipelines.</li>
            <li>Evaluated models using performance metrics.</li>
          </ul>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-2xl font-bold">
            HCLTech
          </h3>

          <p className="text-cyan-400 mt-1">
            Data Engineering & Visualization Intern | Oct 2024 - Mar 2025
          </p>

          <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
            <li>Built ETL pipelines using Python.</li>
            <li>Designed Data Warehouse star schema models.</li>
            <li>Created Power BI dashboards.</li>
            <li>Worked on analytical reporting systems.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}