import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ExternalLink } from "@/components/external-link";
import { projects } from "@/lib/resume";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageShell
      index="03"
      title="Projects"
      lead="Selected builds with live deployments and source code."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-[2px] border border-line bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium text-ink">
                  {project.name}
                </h2>
                <p className="text-sm text-muted">{project.subtitle}</p>
              </div>
              <p className="shrink-0 font-mono text-xs text-muted">
                {project.period}
              </p>
            </div>

            <ul className="mt-4 flex-1 space-y-3">
              {project.bullets.map((bullet) => (
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

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-[2px] bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent-deep"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.links.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4">
                {project.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="text-accent-deep hover:text-accent"
                  >
                    {link.label} {project.name}
                  </ExternalLink>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
