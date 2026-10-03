"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * The "← All writeups" link, but leaving a writeup plays a short Bleach-themed
 * exit — the zanpakutō sheathing: the hollow mask spins away, a dark seal wipes
 * the page shut — before navigating back. Respects reduced motion (navigates
 * immediately) and keeps working if JS/animation is unavailable.
 */
export function WriteupExitLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    router.prefetch?.(href);
  }, [href, router]);

  useEffect(() => {
    if (!leaving) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => router.push(href), 900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [leaving, href, router]);

  const onClick = (e: React.MouseEvent) => {
    if (reduce || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setLeaving(true);
  };

  return (
    <>
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>

      <AnimatePresence>
        {leaving && (
          <motion.div
            key="writeup-exit"
            className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#05070b]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* dark seal wiping the page shut */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, transparent 0%, rgba(125,211,252,0.25) 46%, #e5f6ff 50%, rgba(125,211,252,0.25) 54%, transparent 100%)",
              }}
              initial={{ x: "120%", skewX: "-12deg" }}
              animate={{ x: "-120%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* the hollow mask sheathing away */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/bleach/hollow-mask.jpg"
              alt=""
              className="relative h-[260px] w-[260px] select-none object-contain"
              style={{ mixBlendMode: "screen" }}
              initial={{ opacity: 0, scale: 1, rotateY: 0, filter: "blur(0px)" }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 0.9, 0.25],
                rotateY: [0, 40, 110],
                filter: ["blur(0px)", "blur(0px)", "blur(6px)"],
              }}
              transition={{ duration: 0.85, ease: "easeIn", times: [0, 0.4, 1] }}
            />

            <p className="absolute bottom-10 font-mono text-xs uppercase tracking-[0.3em] text-accent/70">
              sheathing…
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
