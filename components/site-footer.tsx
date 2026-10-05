import Link from "next/link";
import { profile, sections } from "@/lib/resume";

export function SiteFooter() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="text-[13px] font-bold text-ink underline decoration-1 underline-offset-2 transition-colors hover:text-accent-deep"
            >
              {section.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center gap-1 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
