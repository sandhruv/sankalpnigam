import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ExternalLink } from "@/components/external-link";
import { certificates } from "@/lib/resume";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <PageShell index="04" title="Certificates">
      <ul className="divide-y divide-line overflow-hidden rounded-[2px] border border-line bg-white">
        {certificates.map((certificate) => (
          <li
            key={certificate.href}
            className="flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <h2 className="text-sm font-medium text-ink">
                {certificate.name}
              </h2>
              <p className="text-xs text-muted">
                {certificate.issuer} · {certificate.date}
              </p>
            </div>
            <ExternalLink
              href={certificate.href}
              className="shrink-0 text-sm text-accent-deep hover:text-accent"
            >
              View credential
            </ExternalLink>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
