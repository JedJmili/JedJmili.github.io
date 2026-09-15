"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Re-mounts on every client-side route navigation, giving each page a smooth
 * enter transition. Respects reduced motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
