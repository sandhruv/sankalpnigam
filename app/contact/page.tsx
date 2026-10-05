import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ExternalLink } from "@/components/external-link";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/resume";

export const metadata: Metadata = { title: "Contact" };

const telHref = `tel:${profile.mobile.replace(/[^+\d]/g, "")}`;

export default function ContactPage() {
  return (
    <PageShell
      index="07"
      title="Contact"
      lead="Open to internships, full-time roles and collaborations in full-stack engineering and applied AI."
      surface
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink">
          E-mail:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-bold text-accent-deep underline underline-offset-2"
          >
            {profile.email}
          </a>
          ,{" "}
          <a
            href={telHref}
            className="font-bold text-accent-deep underline underline-offset-2"
          >
            {profile.mobile}
          </a>
        </p>

        <p className="mt-4 text-[15px] text-ink">Address: {profile.location}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {profile.links.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              className="rounded-[2px] border border-line bg-white px-5 py-3 text-sm text-accent-deep hover:border-accent hover:text-accent-deep"
            >
              {link.label}
            </ExternalLink>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[2px] border border-line bg-white px-5 py-3 text-sm font-bold text-accent-deep underline decoration-1 underline-offset-2 transition-colors hover:border-accent"
          >
            Email
          </a>
          <a
            href={telHref}
            className="rounded-[2px] border border-line bg-white px-5 py-3 text-sm font-bold text-accent-deep underline decoration-1 underline-offset-2 transition-colors hover:border-accent"
          >
            Call
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-line pt-6 text-sm text-muted">
          <p>
            Prefer e-mail? Write to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-bold text-accent-deep underline underline-offset-2"
            >
              {profile.email}
            </a>
          </p>
          <p className="text-xs">{profile.location}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </PageShell>
  );
}
