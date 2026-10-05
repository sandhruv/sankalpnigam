import Link from "next/link";
import { profile } from "@/lib/resume";
import { NavLinks } from "@/components/nav-links";

export function SiteHeader() {
  return (
    <header>
      <div className="sticky top-0 z-50 flex h-12 items-stretch gap-4 bg-nav/95 px-3 backdrop-blur sm:px-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-white/95 transition-opacity hover:opacity-80"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-[2px] bg-accent font-bold text-black">
            <span className="text-[13px] leading-none">SN</span>
          </span>
          <span className="hidden text-[19px] leading-none font-normal whitespace-nowrap sm:inline">
            {profile.name}
          </span>
        </Link>

        <NavLinks />
      </div>

      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[#262626] sm:h-[280px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(65%_85%_at_18%_15%,rgba(70,84,110,0.95),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(55%_65%_at_88%_75%,rgba(140,142,150,0.35),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.07)_0_2px,transparent_2px_28px)]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-10 left-[8%] size-40 rounded-full bg-black/40 blur-[2px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-10 -bottom-16 size-56 rounded-full bg-black/30"
        />

        <p className="relative px-5 text-center font-script text-5xl leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:text-7xl">
          {profile.name}
        </p>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[10px] bg-accent"
        />
      </div>
    </header>
  );
}
