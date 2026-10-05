import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ExternalLink } from "@/components/external-link";
import { ZoomableImage } from "@/components/zoomable-image";
import { achievements } from "@/lib/resume";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <PageShell index="05" title="Achievements">
      <ul className="space-y-5">
        {achievements.map((achievement) => {
          const meta = (
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-xs text-muted">
                {achievement.date}
              </span>
              {achievement.href ? (
                <ExternalLink
                  href={achievement.href}
                  className="text-sm text-accent-deep hover:text-accent"
                >
                  View post
                </ExternalLink>
              ) : null}
            </div>
          );

          const body = (
            <p className="text-sm leading-relaxed text-body">
              {achievement.text}
            </p>
          );

          if (achievement.image) {
            return (
              <li
                key={achievement.text}
                className="overflow-hidden rounded-[2px] border border-line bg-white"
              >
                <div className="grid gap-5 p-5 sm:grid-cols-[minmax(0,340px)_1fr] sm:items-center sm:p-6">
                  <ZoomableImage
                    src={achievement.image}
                    alt={achievement.imageAlt ?? achievement.text}
                    width={achievement.imageWidth ?? 800}
                    height={achievement.imageHeight ?? 591}
                    buttonClassName="w-full"
                    imageClassName="h-auto w-full border border-line"
                    priority
                  />
                  <div>
                    {body}
                    <div className="mt-4">{meta}</div>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li
              key={achievement.text}
              className="flex flex-col gap-2 rounded-[2px] border border-line bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              {body}
              {meta}
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
