import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { education } from "@/lib/resume";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageShell index="06" title="Education">
      <ol className="space-y-4">
        {education.map((entry) => (
          <li
            key={`${entry.school}-${entry.degree}`}
            className="rounded-[2px] border border-line bg-white px-6 py-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-base font-medium text-ink">
                {entry.school}
              </h2>
              <p className="font-mono text-xs text-muted sm:shrink-0">
                {entry.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-body">
              {entry.degree}
              <span className="text-muted"> · {entry.location}</span>
            </p>
            <p className="mt-1 text-sm font-bold text-accent-deep">{entry.detail}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
