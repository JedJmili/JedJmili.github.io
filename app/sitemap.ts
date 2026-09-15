import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllWriteups } from "@/lib/writeups";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/writeups`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const posts = getAllWriteups();

  for (const post of posts) {
    routes.push({
      url: `${base}/writeups/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}