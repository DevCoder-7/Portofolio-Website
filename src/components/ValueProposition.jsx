import { FileText, SearchCheck, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { valueProps } from "../data/experiences.js";

const icons = [SearchCheck, FileText, Wrench];

function ValueProposition() {
  return (
    <section className="section-padding">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Me"
          title="I bring a tester's caution to builder work."
          copy="My value is not framed as senior professional experience. It is a growing, practical security mindset shaped through projects, CTFs, testing, and documentation."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {valueProps.map((value, index) => {
            const Icon = icons[index] ?? SearchCheck;
            return (
              <article key={value.title} className="glass-card p-6 text-center transition hover:-translate-y-1 hover:border-emerald-300/35">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-emerald-300/10 text-emerald-200">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{value.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
