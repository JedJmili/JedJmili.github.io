"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";
import { List } from "lucide-react";

/**
 * Sticky left-hand list that links to every task/section in a writeup and
 * highlights the one currently in view.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.slug ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((i) => document.getElementById(i.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      // trigger when a heading sits in the upper third of the viewport
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 1] }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-textMuted">
        <List className="h-3.5 w-3.5" aria-hidden="true" />
        On this page
      </p>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => {
          const isActive = active === item.slug;
          return (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                className={[
                  "-ml-px block border-l-2 py-1 transition-colors",
                  item.depth === 3 ? "pl-6" : "pl-3",
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-textMuted hover:border-border hover:text-textSecondary",
                ].join(" ")}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
