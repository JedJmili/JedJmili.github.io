"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import Link from "next/link";
import { ZanpaktoLogo } from "./ZanpaktoLogo";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "CTF", href: "/#ctf" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Writeups", href: "/#writeups" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold text-textPrimary"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent transition-transform duration-300 group-hover:rotate-[-18deg]">
            <ZanpaktoLogo className="h-8 w-8" />
          </span>
          <span className="text-accent">{profile.handle}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-textSecondary transition-colors hover:bg-surface2 hover:text-textPrimary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Resume_JedJmili.pdf"
            download
            className="hidden items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 md:inline-flex"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-textPrimary hover:bg-surface2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base text-textSecondary transition-colors hover:bg-surface2 hover:text-textPrimary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="/Resume_JedJmili.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                  onClick={() => setOpen(false)}
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
