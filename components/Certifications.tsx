import { certifications } from "@/data/certifications";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="certifications"
          title="Certifications & Learning"
          description="Foundational and professional security and networking certifications."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06} className="h-full">
              <CertificationCard cert={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
