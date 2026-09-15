import { getAllWriteups } from "@/lib/writeups";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BlogCard } from "./BlogCard";

export async function WriteupsSection() {
  const posts = getAllWriteups();

  return (
    <section id="writeups" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="writeups"
          title="CTF Writeups"
          description="CTF writeups and pentesting techniques from my competitions."
        />
        {posts.length === 0 ? (
          <Reveal>
            <p className="text-center text-sm text-textMuted">
              No published writeups yet. Add `.mdx` files under{" "}
              <code className="text-accent">content/writeups</code>.
            </p>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
