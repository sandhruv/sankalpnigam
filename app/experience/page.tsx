import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { experience } from "@/lib/resume";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PageShell index="02" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.company}
            className="rounded-[2px] border border-line bg-white p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="text-lg font-medium text-ink">{job.role}</h2>
                <p className="text-sm font-bold text-accent-deep">{job.company}</p>
              </div>
              <p className="font-mono text-xs text-muted sm:shrink-0">
                {job.period}
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
