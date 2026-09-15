# Photos — Achievements / Team

Drop your team & competition photos here as image files (jpg/png/webp).

Once a photo is here:

1. Open `data/gallery.ts`
2. Add an entry, e.g.:
   ```ts
   { filename: "cybersphere-2026-team.jpg", caption: "Cybersphere Advanced CTF 2026" }
   ```

The gallery in the Achievements section automatically:
- Picks up any image you list
- Skips files that aren't present yet (so you can pre-list entries safely)
- Opens a fullscreen lightbox (with keyboard arrows / Esc) when clicked

Recommended: landscape photos, ~1600px wide for crispness.

## Profile photo (About section)
Drop your profile photo at:

    public/images/profile.jpg

The About section shows it automatically. If the file isn't there yet, nothing
is shown and the layout stays clean.
