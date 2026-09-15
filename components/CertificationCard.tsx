import type { Certification } from "@/data/certifications";
import { BadgeCheck, ExternalLink } from "lucide-react";

export function CertificationCard({
  cert,
}: {
  cert: Certification;
}) {
  const hasLink = Boolean(cert.credentialUrl);
  const hasId = Boolean(cert.credentialId);

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.25)]">
      <div className="mb-3 flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-success/30 bg-success/10 text-success">
          <BadgeCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-textMuted">{cert.date}</span>
      </div>
      <h3 className="text-base font-semibold text-textPrimary">{cert.name}</h3>
      <p className="mt-1 text-sm text-textSecondary">{cert.organization}</p>
      <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
        {hasLink && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-bright"
          >
            Verify credential
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
        {hasId && (
          <span className="font-mono text-xs text-textMuted">
            ID: {cert.credentialId}
          </span>
        )}
      </div>
    </div>
  );
}
