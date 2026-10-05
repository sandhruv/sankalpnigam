import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectMarquee } from "@/components/project-marquee";
import { AchievementMarquee } from "@/components/achievement-marquee";
import { PageShell } from "@/components/page-shell";
import { sections } from "@/lib/resume";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProjectMarquee />

      <AchievementMarquee />

      <PageShell
        index="00"
        title="Explore"
        lead="Everything on this site, in one place."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections
            .filter((section) => section.href !== "/")
            .map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="group flex h-full flex-col rounded-[2px] border border-line bg-white p-5 transition-colors hover:border-accent"
                >
                  <span className="text-lg font-medium text-ink transition-colors group-hover:text-accent-deep">
                    {section.label}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">
                    {section.blurb}
                  </span>
                  <span className="mt-4 font-mono text-[11px] tracking-[0.2em] text-accent-deep uppercase">
                    Open →
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </PageShell>
    </>
  );
}
