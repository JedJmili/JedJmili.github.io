import { getWriteupsByEvent } from "@/lib/writeups";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WriteupGroups } from "./WriteupGroups";

export async function WriteupsSection() {
  const groups = getWriteupsByEvent();

  return (
    <section id="writeups" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="writeups"
          title="CTF Writeups"
          description="CTF writeups and pentesting techniques, grouped by competition."
        />
        {groups.length === 0 ? (
          <Reveal>
            <p className="text-center text-sm text-textMuted">
              No published writeups yet. Add `.mdx` files under{" "}
              <code className="text-accent">content/writeups</code>.
            </p>
          </Reveal>
        ) : (
          <WriteupGroups groups={groups} />
        )}
      </Container>
    </section>
  );
}
