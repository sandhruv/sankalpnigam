"use client";

import Image from "next/image";
import { useState } from "react";

type ProfilePhotoProps = {
  name: string;
  src?: string;
};

export function ProfilePhoto({ name, src = "/profile.jpg" }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface">
      {failed ? (
        <div className="grid h-full w-full place-items-center">
          <span className="font-script text-7xl leading-none text-accent-deep">
            {initials}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 200px, 200px"
          className="object-cover"
          priority
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
