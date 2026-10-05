import { ExternalLink } from "@/components/external-link";
import { ZoomableImage } from "@/components/zoomable-image";
import { achievements } from "@/lib/resume";

export function AchievementMarquee() {
  const items = [...achievements, ...achievements];

  return (
    <section className="border-t border-line bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.3em] text-accent-deep uppercase">
          05
        </p>
        <h2 className="mt-1 text-2xl leading-tight font-light text-ink sm:text-[28px]">
          Achievements
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          A moving glimpse of awards and milestones.
          <span className="ml-1 text-xs">(hover to pause)</span>
        </p>
      </div>

      <div className="marquee relative mt-7 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 px-5 sm:px-8">
          {items.map((achievement, position) => (
            <article
              key={`${achievement.text}-${position}`}
              className="w-[300px] shrink-0 overflow-hidden border border-line bg-white sm:w-[360px]"
            >
              {achievement.image ? (
                <ZoomableImage
                  fill
                  src={achievement.image}
                  alt={achievement.imageAlt ?? achievement.text}
                  sizes="(max-width: 640px) 300px, 360px"
                  buttonClassName="h-44 w-full border-b border-line bg-surface"
                  imageClassName={
                    achievement.imageFit === "contain"
                      ? "object-contain p-3"
                      : "object-cover"
                  }
                />
              ) : null}

              <div className="p-4">
                <p className="line-clamp-4 text-sm leading-relaxed text-body">
                  {achievement.text}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-line pt-3">
                  <span className="font-mono text-xs text-muted">
                    {achievement.date}
                  </span>
                  {achievement.href ? (
                    <ExternalLink
                      href={achievement.href}
                      className="text-xs text-accent-deep hover:text-accent"
                    >
                      View post
                    </ExternalLink>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent sm:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:w-16"
        />
      </div>
    </section>
  );
}
