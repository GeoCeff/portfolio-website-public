"use client";

import { useState } from "react";
import Image from "next/image";
import { sitePath } from "./paths";

export type PortraitSlide = {
  src?: string;
  label: string;
  detail: string;
};

type PortraitOrbitProps = {
  alt: string;
  fallback: string;
  slides: PortraitSlide[];
};

function PortraitSlideContent({
  alt,
  fallback,
  priority,
  slide
}: {
  alt: string;
  fallback: string;
  priority?: boolean;
  slide: PortraitSlide;
}) {
  return slide.src ? (
    <Image
      alt={alt}
      className="portrait-photo"
      height={520}
      priority={priority}
      src={sitePath(slide.src)}
      width={520}
    />
  ) : (
    <span className="portrait-empty">
      <strong>{fallback}</strong>
      <em>{slide.label}</em>
      <small>{slide.detail}</small>
    </span>
  );
}

export default function PortraitOrbit({ alt, fallback, slides }: PortraitOrbitProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [shuffleKey, setShuffleKey] = useState(0);
  const safeSlides = slides.length ? slides : [{ label: fallback, detail: "Portrait slot", src: undefined }];
  const activeSlide = safeSlides[activeIndex % safeSlides.length];
  const previousSlide = previousIndex === null ? null : safeSlides[previousIndex % safeSlides.length];

  const cyclePortrait = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((index) => (index + 1) % safeSlides.length);
    setShuffleKey((key) => key + 1);
  };

  return (
    <>
      <div className="portrait-orbit" aria-hidden="true" />
      <button
        aria-label={`Cycle portrait image. Current slide: ${activeSlide.label}`}
        className="portrait-frame portrait-button"
        onClick={cyclePortrait}
        type="button"
      >
        <span className="portrait-placeholder" key={shuffleKey} onAnimationEnd={() => setPreviousIndex(null)}>
          {previousSlide ? (
            <span className="portrait-card portrait-card--out" aria-hidden="true">
              <PortraitSlideContent alt={alt} fallback={fallback} slide={previousSlide} />
            </span>
          ) : null}
          <span className="portrait-card portrait-card--in">
            <PortraitSlideContent alt={alt} fallback={fallback} priority={activeIndex === 0} slide={activeSlide} />
          </span>
        </span>
      </button>
    </>
  );
}
