"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  buttonClassName?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  buttonClassName,
  imageClassName,
  priority,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom image: ${alt}`}
        className={`group relative block cursor-zoom-in ${buttonClassName ?? ""}`}
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/65 px-2 py-0.5 text-[10px] tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Click to zoom
        </span>
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-black/88 p-4"
            >
              <Image
                src={src}
                alt={alt}
                width={width ?? 1200}
                height={height ?? 800}
                className="max-h-[84vh] h-auto w-auto max-w-[94vw] object-contain"
                priority
              />
              <p className="max-w-[94vw] text-center text-xs leading-relaxed text-white/75">
                {alt}
                <span className="ml-2 text-white/45">
                  (click anywhere or Esc to close)
                </span>
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close zoom"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-lg text-white transition hover:bg-white/15"
              >
                ✕
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
