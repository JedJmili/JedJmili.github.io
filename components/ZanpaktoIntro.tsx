"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Bleach-themed access animation that plays once when a writeup page mounts.
 *
 * Sequence (~2.8s):
 *   1. A zanpakutō sweeps across the screen, carving a glowing slash.
 *   2. A hollow mask turns in (rotateY) and flares with reiatsu.
 *   3. A white "bleach" wipe sweeps through and dissolves to reveal the page.
 *
 * Respects prefers-reduced-motion (skips straight to the content) and can be
 * dismissed at any time with the Skip button, Escape, or a click.
 */
export function ZanpaktoIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  // If motion is reduced, never render the overlay at all.
  useEffect(() => {
    if (reduce) setShow(false);
  }, [reduce]);

  // Auto-dismiss after the sequence, lock scroll while it plays, allow Escape.
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 2800);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="zanpakto-intro"
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#05070b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setShow(false)}
          role="presentation"
        >
          {/* faint reiatsu grid / vignette */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{ duration: 1.6, times: [0, 0.4, 1] }}
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56,189,248,0.10), transparent 70%)",
            }}
          />

          {/* rising reiatsu embers */}
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute bottom-[-10%] h-1 w-1 rounded-full bg-accent"
              style={{ left: `${(i * 7 + 6) % 100}%` }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -600 - (i % 5) * 80, opacity: [0, 0.9, 0] }}
              transition={{
                duration: 2.2,
                delay: 0.2 + (i % 7) * 0.12,
                ease: "easeOut",
              }}
            />
          ))}

          {/* ── 1. The zanpakutō slash ───────────────────────────────── */}
          {/* the blade */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 origin-center"
            initial={{ x: "-70vw", y: "60vh", rotate: -45, opacity: 0 }}
            animate={{
              x: ["-70vw", "70vw"],
              y: ["60vh", "-60vh"],
              rotate: -45,
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 0.85, ease: "easeIn", times: [0, 0.1, 0.85, 1] }}
          >
            <Katana />
          </motion.div>

          {/* the glowing slash the blade leaves behind */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[3px] w-[160vw] -translate-x-1/2 -translate-y-1/2"
            style={{
              rotate: "-30deg",
              background:
                "linear-gradient(90deg, transparent, #7dd3fc 20%, #ffffff 50%, #7dd3fc 80%, transparent)",
              boxShadow: "0 0 24px 4px rgba(125,211,252,0.9)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.3, ease: "easeOut", times: [0, 0.35, 0.7, 1] }}
          />

          {/* slash flash */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.65, 0] }}
            transition={{ duration: 0.3, delay: 0.72, ease: "easeOut" }}
          />

          {/* ── 2. The hollow mask turning in ────────────────────────── */}
          <div
            className="pointer-events-none relative flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* Gotei 13 reiatsu seal, spinning behind */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/bleach/gotei13.jpg"
              alt=""
              className="absolute h-[440px] w-[440px] select-none"
              style={{
                mixBlendMode: "screen",
                filter: "invert(1) drop-shadow(0 0 22px rgba(56,189,248,0.7))",
              }}
              initial={{ opacity: 0, rotate: -45, scale: 0.65 }}
              animate={{
                opacity: [0, 0.38, 0.22, 0],
                rotate: [-45, 25],
                scale: [0.65, 1.18],
              }}
              transition={{
                duration: 2.3,
                delay: 0.5,
                ease: "easeOut",
                times: [0, 0.3, 0.8, 1],
              }}
            />
            {/* the real hollow mask, turning in */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/bleach/hollow-mask.jpg"
              alt="Hollow mask"
              className="relative h-[320px] w-[320px] select-none object-contain"
              style={{ mixBlendMode: "screen", transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, rotateY: -95, scale: 0.6 }}
              animate={{
                opacity: [0, 1, 1, 0],
                rotateY: [-95, 10, 0, 0],
                scale: [0.6, 1.06, 1, 1.05],
                filter: [
                  "blur(8px) drop-shadow(0 0 0 rgba(56,189,248,0))",
                  "blur(0px) drop-shadow(0 0 30px rgba(56,189,248,0.6))",
                  "blur(0px) drop-shadow(0 0 30px rgba(56,189,248,0.6))",
                  "blur(3px) drop-shadow(0 0 44px rgba(56,189,248,0))",
                ],
              }}
              transition={{
                duration: 2.0,
                delay: 0.6,
                ease: [0.2, 0.7, 0.3, 1],
                times: [0, 0.35, 0.7, 1],
              }}
            />
          </div>

          {/* ── 3. The bleach wipe reveal ────────────────────────────── */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ x: "-120%", skewX: "-12deg", opacity: 0 }}
            animate={{ x: ["-120%", "120%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, delay: 1.95, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.85) 35%, #ffffff 50%, rgba(255,255,255,0.85) 65%, transparent 100%)",
            }}
          />

          {/* Skip */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            className="absolute bottom-6 right-6 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70 backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Zanpakutō (katana) ─────────────────────────────────────────────── */
function Katana() {
  return (
    <svg width="340" height="60" viewBox="0 0 340 60" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="blade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="0.5" stopColor="#e5f6ff" />
          <stop offset="1" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
      {/* blade */}
      <path
        d="M70 30 L300 22 Q314 30 300 38 L70 30 Z"
        fill="url(#blade)"
        stroke="#ffffff"
        strokeWidth="0.6"
        style={{ filter: "drop-shadow(0 0 10px rgba(125,211,252,0.9))" }}
      />
      {/* guard (tsuba) */}
      <rect x="60" y="16" width="7" height="28" rx="3" fill="#9aa3b2" />
      {/* handle (tsuka) */}
      <rect x="18" y="24" width="44" height="12" rx="4" fill="#232a36" />
      <rect x="18" y="24" width="44" height="12" rx="4" fill="none" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  );
}
