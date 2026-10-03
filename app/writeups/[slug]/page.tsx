import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Calendar, Clock, Folder } from "lucide-react";
import { getAllWriteups, getWriteup } from "@/lib/writeups";
import { extractToc } from "@/lib/toc";
import { mdxComponents } from "@/components/mdx";
import { ZanpaktoIntro } from "@/components/ZanpaktoIntro";
import { ReadingProgress } from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { WriteupExitLink } from "@/components/WriteupExitLink";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllWriteups().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWriteup(slug);
  if (!post)
    return {
      title: "Writeup not found",
      description: "The requested writeup could not be found.",
    };
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function WriteupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWriteup(slug);
  if (!post) notFound();

  if (post.meta.externalUrl) {
    redirect(post.meta.externalUrl);
  }

  const toc = extractToc(post.content);

  return (
    <>
      <ReadingProgress />
      <ZanpaktoIntro />
      <Navbar />
      <main className="pt-28 pb-24">
        <Container>
          <WriteupExitLink
            href="/writeups"
            className="mb-8 inline-flex cursor-pointer text-sm text-textMuted transition-colors hover:text-accent"
          >
            ← All writeups
          </WriteupExitLink>

          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            {/* Left: sticky table of contents (desktop) */}
            {toc.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
                  <TableOfContents items={toc} />
                </div>
              </aside>
            )}

            <article className="min-w-0 max-w-3xl">
              {post.meta.cover && (
                <div className="mb-8 overflow-hidden rounded-xl border border-border bg-background">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.meta.cover}
                    alt=""
                    className="mx-auto max-h-80 w-full object-contain p-6"
                  />
                </div>
              )}
              <header className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                    <Folder className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.meta.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-textMuted">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.meta.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-textMuted">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.meta.readingTime}
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
                  {post.meta.title}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-textSecondary">
                  {post.meta.excerpt}
                </p>
              </header>

              {/* Collapsible table of contents (mobile / tablet) */}
              {toc.length > 0 && (
                <details className="mb-8 rounded-lg border border-border bg-surface/50 p-4 lg:hidden">
                  <summary className="cursor-pointer font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    On this page
                  </summary>
                  <div className="mt-4">
                    <TableOfContents items={toc} />
                  </div>
                </details>
              )}

              <div className="border-t border-border pt-8 prose prose-invert max-w-none prose-slate">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
