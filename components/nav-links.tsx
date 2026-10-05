"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/resume";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex min-w-0 flex-1 items-stretch justify-end gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {sections.map((section) => {
        const isActive =
          section.href === "/"
            ? pathname === "/"
            : pathname.startsWith(section.href);
        return (
          <Link
            key={section.href}
            href={section.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex shrink-0 items-center border-b-[5px] px-2.5 text-[14px] font-bold whitespace-nowrap transition-colors sm:px-3 ${
              isActive
                ? "border-accent text-white"
                : "border-transparent text-white/90 hover:bg-white/10 hover:text-white"
            }`}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}
