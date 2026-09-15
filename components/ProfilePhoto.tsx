import fs from "fs";
import path from "path";
import { profile } from "@/data/profile";

/**
 * Renders the profile photo in a framed "security lab" card.
 * If no image file exists at public/images/profile.jpg it renders nothing,
 * so the layout stays clean until you add your photo.
 *
 * Drop your photo at: public/images/profile.jpg
 */
export function ProfilePhoto() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    path.basename(profile.image)
  );
  const exists = fs.existsSync(filePath);
  if (!exists) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-surface/60 p-2">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="glow absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-xl border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.image}
          alt={`Profile photo of ${profile.name}`}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-background/70 px-2 py-1 font-mono text-xs text-accent backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          online
        </div>
      </div>
    </div>
  );
}
