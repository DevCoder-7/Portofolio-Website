import { ArrowRight, Download, Github, Mail, ShieldCheck, Terminal } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";
import { profile } from "../data/profile.js";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid-slate bg-[length:42px_42px] pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/80 to-slate-950" />
      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-16 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
            <ShieldCheck size={16} />
            Open to cybersecurity, QA/testing, documentation, and internship opportunities
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-cyan-100">{profile.heroSubtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.heroBadges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.cvPath}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-amber-300/70 hover:bg-amber-300/10"
            >
              <Download size={17} />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
            >
              <Mail size={17} />
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-cyan-300/45 via-emerald-300/25 to-amber-300/35 blur-xl" />
            <img
              src={profilePhoto}
              alt="Portrait of Glenn Josia Devano"
              className="relative aspect-[4/5] w-full rounded-lg border border-white/15 object-cover shadow-2xl"
            />
          </div>

          <div className="glass-card mx-auto w-full max-w-md overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <Terminal className="ml-auto text-cyan-200" size={17} />
            </div>
            <div className="space-y-3 p-4 font-mono text-sm leading-6">
              <p>
                <span className="text-emerald-300">$ whoami</span>
                <br />
                <span className="text-slate-100">Glenn Josia Devano</span>
              </p>
              <p>
                <span className="text-emerald-300">$ focus</span>
                <br />
                <span className="text-cyan-100">Cybersecurity | QA Testing | Web Security | CTF</span>
              </p>
              <p>
                <span className="text-emerald-300">$ status</span>
                <br />
                <span className="text-slate-100">
                  Open to internship, QA/testing, technical documentation, and cybersecurity opportunities
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
