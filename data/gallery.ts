export interface GalleryPhoto {
  /** File name inside public/images/achievements/ (e.g. "team-1.jpg") */
  filename: string;
  /** Short caption shown under the photo */
  caption: string;
  /** Optional alt text; falls back to the caption if omitted */
  alt?: string;
}

/**
 * Photos of you and your team from CTFs / competitions.
 *
 * To add a photo:
 *   1. Drop the image file into  public/images/achievements/
 *   2. Add an entry below with the filename and a caption.
 *
 * Photos whose files aren't present yet are skipped automatically, so you can
 * list placeholders now and drop the real files in later — the layout stays clean.
 */
export const gallery: GalleryPhoto[] = [
  // Example entries — replace with your real team photos:
   { filename: "Cybersphere.jpg", caption: "Cybersphere Advanced CTF 2026" },
   { filename: "cybercamp1.jpg", caption: "CyberCamp Android RE 2025" },
   { filename: "scoreboard.jpg", caption: "Cybersphere Advanced CTF 2026 Scoreboard" },
   { filename: "finals.jpg", caption: "Securinets International Finals 2025" },
];
