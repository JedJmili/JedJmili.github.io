import { projects } from "@/data/projects";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <section id="projects" className="relative py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow="projects"
          title="Selected Projects"
          description="Hands-on security and networking work, from application to infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
