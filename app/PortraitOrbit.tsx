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
  presence?: "online" | "offline" | { emoji: string };
  previewRail?: boolean;
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
      sizes="(max-width: 780px) 240px, 300px"
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

export default function PortraitOrbit({ alt, fallback, presence, previewRail = false, slides }: PortraitOrbitProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [shuffleKey, setShuffleKey] = useState(0);
  const safeSlides = slides.length ? slides : [{ label: fallback, detail: "Portrait slot", src: undefined }];
  const activeSlide = safeSlides[activeIndex % safeSlides.length];
  const previousSlide = previousIndex === null ? null : safeSlides[previousIndex % safeSlides.length];
  const previewBaseIndex = previousIndex ?? activeIndex;
  const previewSlides = Array.from({ length: Math.min(3, safeSlides.length) }, (_, offset) => {
    const index = (previewBaseIndex + offset + 1) % safeSlides.length;
    return { index, slide: safeSlides[index] };
  });
  const presenceKind = typeof presence === "string" ? presence : presence ? "emoji" : null;
  const presenceLabel = typeof presence === "string" ? presence : presence ? `custom status ${presence.emoji}` : null;

  const cyclePortrait = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((index) => (index + 1) % safeSlides.length);
    setShuffleKey((key) => key + 1);
  };

  return (
    <>
      <div className="portrait-orbit" aria-hidden="true" />
      {previewRail && safeSlides.length > 1 ? (
        <div className="portrait-preview-panel" aria-hidden="true">
          <div className="portrait-preview-window">
            <div
              className={`portrait-preview-track${previousIndex === null ? "" : " portrait-preview-track--shuffling"}`}
              key={shuffleKey}
            >
              {previewSlides.map(({ index, slide }, offset) => (
                <span className="portrait-preview-card" key={`${index}-${offset}`}>
                  {slide.src ? (
                    <Image
                      alt=""
                      className="portrait-preview-image"
                      height={240}
                      sizes="(max-width: 780px) 120px, 180px"
                      src={sitePath(slide.src)}
                      width={240}
                    />
                  ) : (
                    <span className="portrait-preview-fallback">{fallback}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <span className="portrait-preview-guide" />
          <span className="portrait-preview-indexes">
            {safeSlides.map((slide, index) => (
              <span className={index === activeIndex ? "active" : undefined} key={slide.label}>
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </span>
        </div>
      ) : null}
      <button
        aria-label={`Cycle portrait image. Current slide: ${activeSlide.label}${presenceLabel ? `. Status: ${presenceLabel}` : ""}`}
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
        {presenceKind ? (
          <span className={`portrait-status portrait-status--${presenceKind}`} aria-hidden="true">
            {typeof presence === "object" ? presence.emoji : null}
          </span>
        ) : null}
      </button>
    </>
  );
}
