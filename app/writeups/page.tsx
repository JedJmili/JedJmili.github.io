import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { WriteupGroups } from "@/components/WriteupGroups";
import { Reveal } from "@/components/Reveal";
import { getWriteupsByEvent } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Writeups & Research",
  description:
    "CTF writeups, vulnerability research, Active Directory security notes, reverse engineering and pentesting articles by Jed Jmili.",
};

export default function WriteupsPage() {
  const groups = getWriteupsByEvent();

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

          {groups.length === 0 ? (
            <Reveal>
              <p className="text-sm text-textMuted">
                No published writeups yet. Add `.mdx` files under{" "}
                <code className="text-accent">content/writeups</code>.
              </p>
            </Reveal>
          ) : (
            <WriteupGroups groups={groups} />
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
