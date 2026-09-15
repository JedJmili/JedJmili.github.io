"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink, Folder } from "lucide-react";
import type { Project } from "@/data/projects";

const sectionLabels: Record<string, string> = {
  problem: "Problem",
  solution: "Solution",
  architecture: "Architecture",
  results: "Results",
  detection: "Detection",
  risk: "Risk Assessment",
  remediation: "Remediation",
  tools: "Tools",
  securityConcepts: "Security Concepts",
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const contentId = useId();

  const sections = Object.entries(project.sections).filter(
    ([, v]) => v && v.length > 0
  );

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.25)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Folder className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-textMuted">{project.year}</span>
      </div>

      <h3 className="text-lg font-semibold text-textPrimary">{project.title}</h3>
      <p className="mt-1 text-sm text-accent">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-textSecondary">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((t) => (
          <span
            key={t.name}
            className="rounded bg-surface2 px-2 py-1 font-mono text-[11px] text-textSecondary"
          >
            {t.name}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="rounded bg-surface2 px-2 py-1 font-mono text-[11px] text-textMuted">
            +{project.technologies.length - 6}
          </span>
        )}
      </div>

      {sections.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
        >
          {open ? "Hide details" : "View details"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-t border-border pt-4">
              {project.highlights.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-textMuted">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-textSecondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sections.map(([key, value]) => (
                <div key={key}>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-textMuted">
                    {sectionLabels[key] ?? key}
                  </h4>
                  <p className="text-sm leading-relaxed text-textSecondary">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm text-accent hover:text-accent-bright"
        >
          View project <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </article>
  );
}
