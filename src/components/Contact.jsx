import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { profile } from "../data/profile.js";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "glenn-josia-devano", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "DevCoder-7", href: profile.github, icon: Github },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
];

function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-950/70">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Contact"
            title="Let's connect for security, QA, documentation, or web work."
            copy="The best way to reach me is by email or LinkedIn. I do not display my phone number publicly on this portfolio for privacy."
          />

          <div className="glass-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <div className="rounded-lg border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-300/35">
                    <Icon className="text-cyan-200" size={22} />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 break-words font-semibold text-white">{value}</p>
                  </div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring rounded-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Inquiry%20-%20Glenn%20Josia%20Devano`}
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
