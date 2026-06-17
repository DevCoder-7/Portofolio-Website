import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { experiences } from "../data/experiences.js";

function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-950/70">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Community, CTF, and digital engagement work."
          copy="A timeline of roles that connect security learning, challenge design, technical review, collaboration, and content execution."
        />

        <div className="relative grid gap-5">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-amber-300 md:block" />
          {experiences.map((experience) => (
            <article key={experience.organization} className="relative md:pl-14">
              <div className="absolute left-[0.72rem] top-6 hidden h-4 w-4 rounded-full border-2 border-slate-950 bg-cyan-300 md:block" />
              <div className="glass-card p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.organization}</h3>
                    <p className="mt-1 font-medium text-cyan-100">{experience.role}</p>
                  </div>
                  <span className="w-fit rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">
                    {experience.badge}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
