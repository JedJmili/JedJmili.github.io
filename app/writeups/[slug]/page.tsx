import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Calendar, Clock, Folder } from "lucide-react";
import { getAllWriteups, getWriteup } from "@/lib/writeups";
import { mdxComponents } from "@/components/mdx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Link from "next/link";

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

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <Container>
          <Link
            href="/writeups"
            className="mb-8 inline-flex text-sm text-textMuted transition-colors hover:text-accent"
          >
            ← All writeups
          </Link>

          <article className="mx-auto max-w-3xl">
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

            <div className="border-t border-border pt-8 prose prose-invert max-w-none prose-slate">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
