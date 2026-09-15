import Link from "next/link";
import type { WriteupMeta } from "@/lib/writeups";
import { ArrowRight, Tag } from "lucide-react";

export function BlogCard({ post }: { post: WriteupMeta }) {
  return (
    <Link
      href={`/writeups/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/30"
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
          {post.category}
        </span>
        <span className="font-mono text-xs text-textMuted">
          {post.date} · {post.readingTime}
        </span>
      </div>
      <h3 className="text-base font-semibold text-textPrimary group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-textSecondary">
        {post.excerpt}
      </p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 rounded bg-surface2 px-2 py-0.5 font-mono text-[11px] text-textMuted"
            >
              <Tag className="h-3 w-3" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      )}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read writeup
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
