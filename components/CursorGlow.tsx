"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A subtle custom cursor: a precise accent dot at the pointer position plus a
 * trailing glow that eases behind it and enlarges over interactive elements.
 *
 * Desktop-only (hidden on touch devices), and fully disabled for users who
 * prefer reduced motion. It never removes the native cursor's keyboard/AT
 * behaviour — the visible cursor is a visual layer only.
 */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;

    const hasFinePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;
    if (!hasFinePointer) return;

    document.documentElement.classList.add("custom-cursor");

    let x = -100;
    let y = -100;
    let ringX = -100;
    let ringY = -100;
    let raf: number | null = null;
    let isOverInteractive = false;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const setDot = () => {
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    };

    const follow = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      setDot();
      raf = requestAnimationFrame(follow);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf === null) raf = requestAnimationFrame(follow);
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      !!el.closest("a, button, [role='button'], input, select, textarea, label");

    const onOver = (e: MouseEvent) => {
      isOverInteractive = isInteractive(e.target);
      ring.dataset.active = isOverInteractive ? "true" : "false";
    };

    const onDown = () => ring.dataset.pressed = "true";
    const onUp = () => ring.dataset.pressed = "false";
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}
