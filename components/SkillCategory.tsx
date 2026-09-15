import type { SkillCategory as SkillCategoryType } from "@/data/skills";

export function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div className="h-full rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.2)]">
      <h3 className="text-base font-semibold text-textPrimary">
        {category.title}
      </h3>
      <p className="mt-1 text-xs text-textMuted">{category.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border bg-surface2 px-3 py-1.5 font-mono text-xs text-textSecondary transition-colors hover:border-accent/40 hover:text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
