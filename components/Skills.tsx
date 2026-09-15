import { skillCategories } from "@/data/skills";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SkillCategory } from "./SkillCategory";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="skills"
          title="Skills & Tooling"
          description="A focused set of capabilities across offensive security, reverse engineering and networking."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06} className="h-full">
              <SkillCategory category={cat} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
