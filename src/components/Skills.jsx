import SectionHeader from "./SectionHeader.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Security, testing, web, and documentation toolkit."
          copy="Grouped skills that reflect my current student, project-based, CTF, testing, and documentation experience."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.category} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
