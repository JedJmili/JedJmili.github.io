import { contact, socials } from "@/data/socials";
import { getAvailabilityStatus } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const availability = getAvailabilityStatus();
  const configuredSocials = socials.filter((s) => s.href);
  const unconfigured = socials.filter((s) => !s.href);

  return (
    <section id="contact" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow="contact"
          title="Let's Talk Security"
          description="Open to cybersecurity internships, jobs, CTF collaborations and research."
        />

        <Reveal>
          <div className="relative z-10 mx-auto max-w-2xl rounded-xl border border-border bg-surface/60 p-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {availability.label}
            </div>

            <p className="text-lg text-textPrimary">
              Have a security role, a CTF, or a project in mind?
            </p>
            <p className="mt-2 text-sm text-textSecondary">
              I&apos;m always interested in challenging problems in offensive
              security and networking.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-bright"
            >
              {contact.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative z-10 mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
            {configuredSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm text-textSecondary transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
            {unconfigured.map((s) => (
              <span
                key={s.label}
                title={`Set your ${s.label} URL in data/socials.ts`}
                className="rounded-md border border-dashed border-border px-4 py-2 text-sm text-textMuted"
              >
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
