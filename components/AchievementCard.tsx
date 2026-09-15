import type { Achievement } from "@/data/achievements";
import { Trophy, PencilLine, Presentation } from "lucide-react";

const kindMeta = {
  placement: { Icon: Trophy, color: "text-accent border-accent/30 bg-accent/10" },
  authored: { Icon: PencilLine, color: "text-warning border-warning/30 bg-warning/10" },
  workshop: { Icon: Presentation, color: "text-success border-success/30 bg-success/10" },
} as const;

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { Icon, color } = kindMeta[achievement.kind];
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.25)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between">
        <span className="font-mono text-4xl font-bold tracking-tight text-textMuted transition-colors group-hover:text-accent/60">
          {achievement.number}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-lg border ${color}`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-textPrimary">
          {achievement.title}
        </h3>
        <p className="mt-1 text-sm text-textSecondary">{achievement.detail}</p>
      </div>
      <p className="mt-4 inline-flex rounded-md bg-surface2 px-2 py-1 font-mono text-xs text-accent">
        {achievement.year}
      </p>
    </div>
  );
}
