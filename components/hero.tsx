import { profile } from "@/lib/resume";
import { ExternalLink } from "@/components/external-link";
import { ProfilePhoto } from "@/components/profile-photo";

const stats = [
  { value: "400+", label: "DSA problems solved" },
  { value: "14.4K+", label: "LOC shipped in Vettora" },
  { value: "62", label: "REST APIs built" },
];

export function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-[200px_1fr] md:gap-12">
        <div className="mx-auto w-full max-w-[200px] md:mx-0">
          <ProfilePhoto name={profile.name} />
          <p className="mt-2 text-center text-sm text-muted md:text-left">
            {profile.location}
          </p>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-[2px] bg-accent px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-accent-deep hover:text-white"
            >
              Email me
            </a>
            <a
              href={`tel:${profile.mobile.replace(/[^+\d]/g, "")}`}
              className="text-sm font-bold text-accent-deep underline underline-offset-2"
            >
              {profile.mobile}
            </a>
            {profile.links.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-accent-deep"
              >
                {link.label}
              </ExternalLink>
            ))}
          </div>

          <dl className="mt-8 grid max-w-3xl grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-4">
                <dt className="text-xs leading-snug text-muted">{stat.label}</dt>
                <dd className="mt-1 font-mono text-2xl font-medium text-accent-deep">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
