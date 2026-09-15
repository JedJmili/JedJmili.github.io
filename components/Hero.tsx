"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Activity } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getAvailabilityStatus } from "@/lib/site";

const iconMap: Record<string, typeof Github> = {
  Github,
  LinkedIn: Linkedin,
};

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <div className="glow absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl border border-border bg-surface/60 p-6 font-mono text-sm backdrop-blur"
      >
        <div className="mb-4 flex items-center gap-2 text-textMuted">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2">{profile.handle}@portfolio</span>
        </div>
        <div className="space-y-2 text-textSecondary">
          <p>
            <span className="text-accent">~</span> whoami
          </p>
          <p className="text-textPrimary">{profile.handle}@portfolio</p>
          <p className="pt-2">
            <span className="text-accent">~</span> cat focus.txt
          </p>
          <p className="text-textPrimary">
            offensive-security
            <br />
            network-security
            <br />
            active-directory
            <br />
            reverse-engineering
            <br />
            ctf
          </p>
          <p className="pt-2 text-success">
            <span className="text-textMuted">#</span> system-status: online
          </p>
        </div>
      </motion.div>

      {[
        { top: "-10%", right: "18%", icon: <Activity className="h-4 w-4" />, delay: 1.4 },
        { top: "30%", right: "-6%", icon: <Activity className="h-4 w-4" />, delay: 1.9 },
      ].map((n, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: n.delay }}
          className="absolute flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-surface text-accent"
          style={{ top: n.top, right: n.right }}
        >
          {n.icon}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const availability = getAvailabilityStatus();
  const availableSocials = socials.filter((s) => s.href).length > 0 ? socials.filter((s) => s.href) : [];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {availability.label}
            </motion.p>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl lg:text-6xl"
            >
              Jed Jmili
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 font-mono text-lg text-accent sm:text-xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 text-sm uppercase tracking-[0.25em] text-textMuted"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-textSecondary"
            >
              {profile.heroSubtitle}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={profile.cta.primary.href}
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-bright"
              >
                {profile.cta.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.cta.secondary.href}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-textPrimary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {profile.cta.secondary.label}
              </a>
            </motion.div>

            {availableSocials.length > 0 && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {availableSocials.map((s) => {
                  const Icon = iconMap[s.label] ?? Github;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-textSecondary transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </motion.div>
            )}
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
