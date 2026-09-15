import { GraduationCap, Languages, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProfilePhoto } from "./ProfilePhoto";

function renderInline(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-textPrimary">
        {part}
      </strong>
    ) : part
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="about"
          title="About Me"
          description="A computer engineering student with an offensive-security mindset."
        />

        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <ProfilePhoto />
            <div className="space-y-5 text-base leading-relaxed text-textSecondary">
              {profile.about.paragraphs.map((p, i) => (
                <p key={i}>{renderInline(p)}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-surface/60 p-6">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-textPrimary">
                  Education
                </h3>
              </div>
              <p className="text-lg font-semibold text-textPrimary">
                {profile.education.institution}
              </p>
              <p className="text-sm text-textSecondary">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-textMuted">
                {profile.education.specialization} · {profile.education.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-border bg-surface/60 p-6">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Languages className="h-5 w-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-textPrimary">
                  Languages
                </h3>
              </div>
              <ul className="space-y-2">
                {profile.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-textSecondary">{l.name}</span>
                    <span className="text-textMuted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-xl border border-border bg-surface/60 p-6">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Users className="h-5 w-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-textPrimary">
                  Community
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-textSecondary">
                {profile.memberships.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
