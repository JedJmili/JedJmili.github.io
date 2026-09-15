import { experience } from "@/data/experience";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section id="experience" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="experience"
          title="Experience & Activities"
          description="My path through competitive security, clubs, workshops and projects."
        />
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-border"
            aria-hidden="true"
          />
          <ul className="space-y-8">
            {experience.map((entry, i) => (
              <Reveal key={`${entry.title}-${i}`} delay={i * 0.05}>
                <li className="relative pl-12">
                  <span
                    className="absolute left-2 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background"
                    aria-hidden="true"
                  />
                  <div className="rounded-xl border border-border bg-surface/60 p-5">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-textPrimary">
                          {entry.title}
                        </h3>
                        <p className="text-sm text-accent">{entry.organization}</p>
                      </div>
                      <span className="font-mono text-xs text-textMuted">
                        {entry.range}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                      {entry.description}
                    </p>
                    {entry.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-surface2 px-2 py-0.5 font-mono text-[11px] text-textSecondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
