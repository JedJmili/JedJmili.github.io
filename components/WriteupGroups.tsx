import type { WriteupGroup } from "@/lib/writeups";
import { Reveal } from "./Reveal";
import { BlogCard } from "./BlogCard";
import { Trophy } from "lucide-react";

/**
 * Renders writeups grouped by competition/event. Each event is a titled
 * section; the cards under it are the choice between its tasks
 * (e.g. Crypto vs. Reverse).
 */
export function WriteupGroups({ groups }: { groups: WriteupGroup[] }) {
  return (
    <div className="space-y-16">
      {groups.map((group, gi) => (
        <section key={group.event} aria-label={group.event}>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-bold tracking-tight text-textPrimary sm:text-2xl">
                {group.event}
              </h2>
              <span className="rounded-full bg-surface2 px-2.5 py-0.5 font-mono text-xs text-textMuted">
                {group.posts.length}{" "}
                {group.posts.length === 1 ? "writeup" : "writeups"}
              </span>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.posts.map((post, i) => (
              <Reveal key={post.slug} delay={(gi * 2 + i) * 0.05} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
