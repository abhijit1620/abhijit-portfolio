export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">About Me</h2>

      <div className="space-y-5 text-lg text-gray-400 leading-8">
        <p>
          I&apos;m a B.Tech AI/ML graduate who likes shipping things people actually use. Right now I
          build and run <span className="text-white font-semibold">Reborn</span>, a logistics platform
          for battery pickup & delivery: a control-room website, an Android driver app and a cloud
          backend, live in production.
        </p>
        <p>
          Before that I fine-tuned LLMs as an LLM Post-Training Intern at Ethara AI, built ML models at
          Zidio and data pipelines and dashboards at HCLTech. I&apos;ve published two peer-reviewed
          research papers and was a GDG On Campus Co-Organizer.
        </p>
        <p>
          Have an idea, a messy process or a team in the field? I can take it from sketch to a
          working app.
        </p>
      </div>
    </section>
  );
}
