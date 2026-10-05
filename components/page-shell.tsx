type PageShellProps = {
  index: string;
  title: string;
  lead?: string;
  surface?: boolean;
  children: React.ReactNode;
};

export function PageShell({
  index,
  title,
  lead,
  surface = false,
  children,
}: PageShellProps) {
  return (
    <main className={`flex-1 ${surface ? "bg-surface" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.3em] text-accent-deep uppercase">
          {index}
        </p>
        <h1 className="mt-1 text-3xl leading-tight font-light text-ink sm:text-[34px]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
