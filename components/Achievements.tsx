import { achievements } from "@/data/achievements";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AchievementCard } from "./AchievementCard";
import { AchievementGallery } from "./AchievementGallery";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow="achievements"
          title="Achievements"
          description="Competitive placements, workshops authored and CTF challenges created."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.number} delay={i * 0.06} className="h-full">
              <AchievementCard achievement={a} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-xs text-textMuted">
            Placements, awards and details are based on provided information.
            Verify wording before publishing.
          </p>
        </Reveal>
        <AchievementGallery />
      </Container>
    </section>
  );
}
