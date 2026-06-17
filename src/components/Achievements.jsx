import { Award } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { achievements } from "../data/experiences.js";

function Achievements() {
  return (
    <section className="section-padding bg-zinc-950/45">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Certifications & Achievements"
          title="Signals from cybersecurity learning, web development, and competitions."
          copy="A compact set of certifications, CTF participation results, and community recognition."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article key={achievement} className="glass-card flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber-300/10 text-amber-200">
                <Award size={21} />
              </div>
              <p className="font-semibold leading-6 text-slate-100">{achievement}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
