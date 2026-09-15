"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  blur = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, y: 24, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
