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
  const [failed, setFailed] = useState(false);
  const imageSrc = src && !failed ? src : null;

  return (
    <div className={`education-logo${imageSrc ? " has-image" : ""}`} aria-label={alt}>
      {imageSrc ? (
        <Image
          alt=""
          aria-hidden="true"
          height={96}
          src={sitePath(imageSrc)}
          width={96}
          onError={() => setFailed(true)}
        />
      ) : null}
      <span>{fallback}</span>
    </div>
  );
}
