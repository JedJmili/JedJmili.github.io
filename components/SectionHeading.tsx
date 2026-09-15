import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-textSecondary">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
