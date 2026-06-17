import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ShieldCheck, Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { projectFilters, projects } from "../data/projects.js";

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_18rem),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(20,83,45,0.48))] p-5">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          <ShieldCheck size={25} />
        </div>
        <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">
          Featured Project
        </span>
      </div>
      <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4 font-mono text-sm leading-6">
        <p className="text-emerald-300">$ flagwarden --mode learn</p>
        <p className="text-cyan-100">challenge: web + forensics</p>
        <p className="text-slate-300">status: hints, scoring, safety checks enabled</p>
      </div>
      <Terminal className="self-end text-cyan-200/80" size={34} />
    </div>
  );
}

function ProjectLink({ link }) {
  const isExternal = link.href.startsWith("http");
  const Icon = link.type === "github" ? Github : ArrowUpRight;

  if (link.disabled) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-slate-400">
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
    >
      <Icon size={16} />
      {link.label}
    </a>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work with a stronger security and QA signal."
          copy="FlagWarden leads the portfolio, while older mobile prototypes are retained as product and UI/UX evidence."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeFilter === filter
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-cyan-300/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-lg border bg-white/[0.045] backdrop-blur transition hover:-translate-y-1 ${
                project.featured
                  ? "border-cyan-300/35 shadow-glow"
                  : "border-white/10 hover:border-cyan-300/30"
              }`}
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-white/10">
                <ProjectVisual project={project} />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="max-w-xl text-xl font-bold text-white">{project.title}</h3>
                  {project.featured ? (
                    <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <ProjectLink key={`${project.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
