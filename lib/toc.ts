export interface TocItem {
  depth: number; // 2 for ##, 3 for ###
  text: string;
  slug: string;
}

/** Turn heading text into a stable URL anchor. Must match the id the
 *  rendered <h2>/<h3> gets in components/mdx.tsx. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[`*_~]/g, "") // strip leftover markdown emphasis / code ticks
    .replace(/[^a-z0-9]+/g, "-") // everything else -> hyphen
    .replace(/^-+|-+$/g, "") // trim hyphens
    .replace(/-{2,}/g, "-");
}

/** Pull the plain text out of a single markdown heading line. */
function cleanHeading(line: string): string {
  return line
    .replace(/^#{2,3}\s+/, "")
    .replace(/`([^`]*)`/g, "$1") // `code` -> code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // [text](url) -> text
    .replace(/[*_~]/g, "")
    .trim();
}

/** Extract an H2/H3 table of contents from raw markdown, skipping fenced
 *  code blocks so `# comments` inside scripts are not treated as headings. */
export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  let inFence = false;
  const seen = new Map<string, number>();

  for (const raw of markdown.split("\n")) {
    const line = raw.trimEnd();
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!m) continue;

    const depth = m[1].length;
    const text = cleanHeading(line);
    if (!text) continue;

    let slug = slugify(text);
    // de-duplicate identical slugs so anchors stay unique
    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count}`;

    items.push({ depth, text, slug });
  }

  return items;
}
