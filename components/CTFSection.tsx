import { ctf } from "@/data/ctf";
import { getIcon } from "@/lib/icons";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CTFSection() {
  const activeCategories = ctf.categories;

  return (
    <section id="ctf" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="ctf profile"
          title="CTF & Security Track Record"
          description={ctf.intro}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-surface/60 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-textPrimary">
                Competition Record
              </h3>
              <ul className="space-y-3">
                {ctf.records.map((r) => (
                  <li
                    key={r.competition}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-textSecondary">
                      {r.competition}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-sm font-medium text-accent">
                        {r.result}
                      </span>
                      <span className="font-mono text-xs text-textMuted">
                        {r.year}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface/60 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-textPrimary">
                Focus Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {activeCategories.map((c) => {
                  const Icon = getIcon(c.icon);
                  return (
                    <div
                      key={c.name}
                      className="flex items-center gap-2 rounded-md bg-surface2 px-3 py-2 text-sm text-textSecondary"
                    >
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                      {c.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
