import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "PeopleSync HRM",
    desc: "HR platform with a web dashboard and an Android app for employees: attendance, leave and payroll.",
    tags: ["Flutter", "JavaScript", "Android"],
    note: "Client project",
  },
  {
    title: "Fine-Tuned Python Coding Assistant",
    desc: "Qwen2.5-0.5B fine-tuned with LoRA on 18k Python instructions, trained on a MacBook M2 and deployed as a live demo.",
    tags: ["LLM", "LoRA / PEFT", "Hugging Face"],
    github: "https://github.com/abhijit1620/finetune-python-assistant",
    demo: "https://huggingface.co/spaces/abhijit1620/python-coding-assistant",
  },
  {
    title: "Agentic AI RAG Chatbot",
    desc: "Answers questions only from its knowledge base, with a relevance threshold for out-of-scope questions.",
    tags: ["LangGraph", "Pinecone", "Gemini", "FastAPI"],
    github: "https://github.com/abhijit1620/agentic-ai-rag",
  },
  {
    title: "AI NeuroAssist",
    desc: "Lets paralyzed patients type and speak using eye movement and blinks: eye tracking, virtual keyboard, word prediction, text-to-speech. Published in IJRASET (Apr 2026).",
    tags: ["Computer Vision", "MediaPipe", "Python"],
    github: "https://github.com/abhijit1620/AI-NeuroAssist-For-Paralyzed-Patients",
  },
  {
    title: "FusionNet",
    desc: "Late-fusion model combining face (ResNet18), audio (2D-CNN) and physiological (1D-CNN) signals. 83% accuracy on WESAD and DEAP, 9-13% above single-signal models. Published in IJERCCE (Feb 2026).",
    tags: ["Deep Learning", "PyTorch", "TensorFlow", "Research"],
    github: "https://github.com/abhijit1620/Multimodal-Stress-Detection",
  },
  {
    title: "Stock Forecasting App",
    desc: "Stock price forecasting with ARIMA, SARIMA, Prophet and LSTM in a Streamlit app.",
    tags: ["Time Series", "LSTM", "Streamlit"],
    github: "https://github.com/abhijit1620/Time-series-stock-forecasting-analysis",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">More Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-gray-400 flex-1">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-4 text-sm">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300">
                  <FaGithub /> Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300">
                  <ExternalLink size={15} /> Live demo
                </a>
              )}
              {p.note && <span className="text-gray-500">{p.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
