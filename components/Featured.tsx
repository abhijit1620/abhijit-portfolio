import Image from "next/image";

const points = [
  "Control-room website: daily route planning per depot, live map of every van, add or reorder stops mid-route, instant alerts",
  "Android driver app: duty start with speedometer photo read by OCR, stops in order with Google Maps, barcode scan of every battery, challan photo as proof",
  "Smart routing: nearest-depot assignment and weekly routes for far dealers up to 250 km",
  "Cloud backend with role-based access (admin, depot staff, drivers) and user approval",
];

const tech = ["Flutter", "Dart", "Django", "PostgreSQL", "AWS", "Docker", "Google Maps", "ML Kit OCR", "OR-Tools"];

export default function Featured() {
  return (
    <section id="work" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-semibold tracking-wide uppercase text-sm text-center">Featured work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-2">Reborn</h2>
        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto text-lg">
          End-to-end logistics platform for battery pickup & delivery. Designed, built and deployed by
          me, and running in production every day.
        </p>

        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 bg-white">
          <a href="/reborn-system.png" target="_blank" rel="noopener noreferrer" title="Open full size">
            <Image
              src="/reborn-system.png"
              alt="Reborn system diagram: users, apps, cloud backend, services and a day on the road"
              width={2200}
              height={1730}
              className="w-full h-auto"
            />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {points.map((p) => (
            <div key={p} className="bg-zinc-900 rounded-2xl p-6 border border-white/10 text-gray-300">
              {p}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
