import { FileText, GraduationCap, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { profile } from "../data/profile.js";

const facts = [
  { label: "Education", value: profile.education, icon: GraduationCap },
  { label: "Community", value: "RISTEK NetSOS SIG", icon: Users },
  { label: "CTF Role", value: "COMPFEST 18 Scientific Committee", icon: ShieldCheck },
  { label: "Strength", value: "Testing notes and technical documentation", icon: FileText },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Security learning, testing discipline, and clear documentation."
          copy={profile.about}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-white">What shapes my work</h3>
            <p className="mt-4 leading-7 text-slate-300">
              My current direction combines cybersecurity fundamentals, software testing habits,
              CTF-style problem solving, and practical product work. I care about finding edge
              cases, explaining behavior clearly, and building things that are useful, maintainable,
              and safe to evaluate.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Universitas Indonesia", "Web Security", "Digital Forensics", "QA Testing"].map(
                (item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map(({ label, value, icon: Icon }) => (
              <div key={label} className="glass-card p-5">
                <Icon className="text-cyan-200" size={24} />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {profile.highlights.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
