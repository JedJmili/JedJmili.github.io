import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { getAllWriteups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Writeups & Research",
  description:
    "CTF writeups, vulnerability research, Active Directory security notes, reverse engineering and pentesting articles by Jed Jmili.",
};

export default function WriteupsPage() {
  const posts = getAllWriteups();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <Container>
          <header className="mb-12 max-w-2xl">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
              writeups
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              Writeups & Research
            </h1>
            <p className="mt-4 text-base leading-relaxed text-textSecondary">
              CTF writeups, vulnerability research, Active Directory security
              notes, reverse engineering walkthroughs and pentesting techniques.
            </p>
          </header>

          {posts.length === 0 ? (
            <Reveal>
              <p className="text-sm text-textMuted">
                No published writeups yet. Add `.mdx` files under{" "}
                <code className="text-accent">content/writeups</code>.
              </p>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.05} className="h-full">
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
