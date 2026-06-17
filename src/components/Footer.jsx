import { Github, Linkedin } from "lucide-react";
import { navLinks, profile } from "../data/profile.js";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="focus-ring rounded text-xl font-bold text-white">
              {profile.logo}
              <span className="text-cyan-300">_</span>
            </a>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded px-2 py-1 text-sm font-medium text-slate-400 transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Glenn's GitHub profile"
              className="focus-ring rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Glenn's LinkedIn profile"
              className="focus-ring rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 Glenn Josia Devano. Built with React, Tailwind CSS, and a security-minded testing lens.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
