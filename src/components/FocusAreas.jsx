import { Bot, Brain, Bug, Flag, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { focusAreas } from "../data/skills.js";

const icons = [ShieldCheck, Flag, Bug, Bot, Brain];

function FocusAreas() {
  return (
    <section className="section-padding bg-zinc-950/45">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Focus Areas"
          title="Where security thinking meets practical testing."
          copy="A concise map of the technical areas I am actively building through coursework, communities, CTFs, and projects."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <article key={area.title} className="glass-card p-5 transition hover:-translate-y-1 hover:border-cyan-300/35">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{area.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
