import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { skills } from "@/lib/resume";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <PageShell
      index="01"
      title="Skills Summary"
      lead="Languages, frameworks, data stores and platforms used across shipped projects."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-[2px] border border-line bg-white p-5"
          >
            <h2 className="font-mono text-xs tracking-[0.15em] text-accent-deep uppercase">
              {group.category}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[2px] bg-surface px-3 py-1 text-sm text-body ring-1 ring-line"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
