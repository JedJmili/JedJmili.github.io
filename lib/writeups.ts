import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WriteupMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  event: string;
  tags: string[];
  readingTime: string;
  cover: string;
  draft: boolean;
  externalUrl?: string;
}

export interface WriteupGroup {
  event: string;
  posts: WriteupMeta[];
}

const contentDir = path.join(process.cwd(), "content", "writeups");

export function getAllWriteups(): WriteupMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      category: data.category ?? "General",
      event: data.event ?? "Other Writeups",
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: data.readingTime ?? "5 min",
      cover: data.cover ?? "",
      draft: Boolean(data.draft),
      externalUrl: typeof data.externalUrl === "string" ? data.externalUrl : undefined,
    } satisfies WriteupMeta;
  });

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Group published writeups by their `event`, newest event first. Within each
 *  group, posts keep the global newest-first order. */
export function getWriteupsByEvent(): WriteupGroup[] {
  const groups = new Map<string, WriteupMeta[]>();

  for (const post of getAllWriteups()) {
    const list = groups.get(post.event) ?? [];
    list.push(post);
    groups.set(post.event, list);
  }

  return Array.from(groups.entries())
    .map(([event, posts]) => ({ event, posts }))
    .sort((a, b) => {
      const an = a.posts[0]?.date ?? "";
      const bn = b.posts[0]?.date ?? "";
      return an < bn ? 1 : an > bn ? -1 : 0;
    });
}

export function getWriteup(slug: string) {
  const file = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as unknown as WriteupMeta, content };
}
