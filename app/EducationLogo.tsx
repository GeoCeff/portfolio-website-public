"use client";

import { useState } from "react";
import Image from "next/image";
import { sitePath } from "./paths";

type EducationLogoProps = {
  alt: string;
  fallback: string;
  src?: string;
};

export default function EducationLogo({ alt, fallback, src }: EducationLogoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`education-logo${loaded ? " has-image" : ""}`} aria-label={alt}>
      {src ? (
        <Image
          alt=""
          aria-hidden="true"
          height={96}
          src={sitePath(src)}
          width={96}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      ) : null}
      <span>{fallback}</span>
    </div>
  );
}
