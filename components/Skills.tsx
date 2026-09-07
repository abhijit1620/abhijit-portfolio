const skills = [
  "Python",
  "SQL",
  "Power BI",
  "TensorFlow",
  "PyTorch",
  "React",
  "GenAI",
  "Machine Learning",
];

export default function Skills() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-zinc-900 rounded-2xl p-6 text-center border border-zinc-800 hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}