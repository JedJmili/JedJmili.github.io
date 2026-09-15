"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  caption: string;
  alt: string;
}

export function GalleryLightboxClient({
  images,
}: {
  images: LightboxImage[];
}) {
  const [index, setIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const open = index !== null;
  const current = open ? images[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i + images.length - 1) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View photo: ${img.caption}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface2 focus-visible:outline-2 focus-visible:outline-accent"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-3 text-left text-xs text-textPrimary">
                {img.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && current && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border text-textSecondary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border text-textSecondary transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border text-textSecondary transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={current.src}
                // eslint-disable-next-line @next/next/no-img-element
                src={current.src}
                alt={current.alt}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="max-h-[75vh] w-auto rounded-lg border border-border object-contain"
              />
              <p className="mt-3 text-center text-sm text-textSecondary">
                {current.caption}
                <span className="ml-3 font-mono text-xs text-textMuted">
                  {index! + 1} / {images.length}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
