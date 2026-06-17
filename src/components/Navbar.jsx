import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="focus-ring rounded text-lg font-bold tracking-tight text-white">
          {profile.logo}
          <span className="text-cyan-300">_</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Open Glenn's GitHub profile"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Open Glenn's LinkedIn profile"
          >
            <Linkedin size={19} />
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`border-t border-white/10 bg-slate-950/96 px-4 py-4 backdrop-blur-xl lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2 border-t border-white/10 pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
