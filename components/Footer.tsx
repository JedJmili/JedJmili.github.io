import { siteConfig } from "@/lib/site";
import { profile } from "@/data/profile";
import { ZanpaktoLogo } from "./ZanpaktoLogo";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Writeups", href: "#writeups" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-mono text-sm text-textSecondary">
          <ZanpaktoLogo className="h-6 w-6 text-accent" />
          <span>
            <span className="text-accent">{profile.handle}</span>@portfolio
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-textMuted transition-colors hover:text-textPrimary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-textMuted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
