import fs from "fs";
import path from "path";
import { gallery } from "@/data/gallery";
import { GalleryLightboxClient } from "./GalleryLightboxClient";

const imagesDir = path.join(process.cwd(), "public", "images", "achievements");

export function AchievementGallery() {
  const existing = gallery.filter((p) => {
    try {
      return fs.existsSync(path.join(imagesDir, p.filename));
    } catch {
      return false;
    }
  });

  if (existing.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="mb-6 text-center">
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          from the field
        </h3>
        <p className="mt-1 text-sm text-textMuted">Team & competition photos</p>
      </div>
      <GalleryLightboxClient images={existing.map((p) => ({
        src: `/images/achievements/${p.filename}`,
        caption: p.caption ?? p.alt ?? p.filename,
        alt: p.alt ?? p.caption ?? p.filename,
      }))} />
    </div>
  );
}
