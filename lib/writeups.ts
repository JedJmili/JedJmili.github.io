import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WriteupMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  cover: string;
  draft: boolean;
  externalUrl?: string;
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

export function getWriteup(slug: string) {
  const file = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as unknown as WriteupMeta, content };
}
