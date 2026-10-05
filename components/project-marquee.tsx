import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { ZoomableImage } from "@/components/zoomable-image";
import { projects } from "@/lib/resume";

export function ProjectMarquee() {
  const items = [...projects, ...projects];

  return (
    <section className="border-t border-line bg-surface py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.3em] text-accent-deep uppercase">
          03
        </p>
        <h2 className="mt-1 text-2xl leading-tight font-light text-ink sm:text-[28px]">
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          A moving glimpse of what I have shipped.
          <span className="ml-1 text-xs">(hover to pause)</span>
        </p>
      </div>

      <div className="marquee relative mt-7 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 px-5 sm:px-8">
          {items.map((project, position) => (
            <article
              key={`${project.name}-${position}`}
              className="w-[300px] shrink-0 overflow-hidden border border-line bg-white sm:w-[420px]"
            >
              {project.image ? (
                <ZoomableImage
                  fill
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                  sizes="(max-width: 640px) 300px, 420px"
                  buttonClassName="aspect-[1200/630] w-full border-b border-line bg-surface"
                  imageClassName="object-cover"
                />
              ) : null}

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-medium text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-muted">
                    {project.period}
                  </span>
                </div>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[2px] bg-accent-soft px-2 py-1 font-mono text-[10px] text-accent-deep"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-line pt-3">
                  <Link
                    href="/projects"
                    className="text-xs text-accent-deep hover:text-accent"
                  >
                    View project →
                  </Link>
                  {project.links[0] ? (
                    <ExternalLink
                      href={project.links[0].href}
                      className="text-xs text-accent-deep hover:text-accent"
                    >
                      {project.links[0].label}
                    </ExternalLink>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-surface to-transparent sm:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-surface to-transparent sm:w-16"
        />
      </div>
    </section>
  );
}
