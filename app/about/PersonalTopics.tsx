"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { sitePath } from "../paths";
import { personalTopics } from "../siteData";

const images = personalTopics.flatMap((topic) =>
  topic.images.map((image) => ({ ...image, topic: topic.title }))
);

export default function PersonalTopics() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  function navigate(direction: number) {
    setActiveIndex((index) => index === null ? null : (index + direction + images.length) % images.length);
  }

  return (
    <>
      <div className="personal-grid">
        {personalTopics.map((topic) => (
          <article className="personal-topic" key={topic.title} data-reveal>
            <h3>{topic.title}</h3>
            <div className="personal-topic-copy">
              {topic.sections.map((section) => (
                <section className="personal-topic-section" key={section.heading}>
                  <h4>{section.heading}</h4>
                  {section.copy.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
            <div className="personal-topic-images" data-count={topic.images.length}>
              {topic.images.map((image) => (
                <button
                  aria-label={`Enlarge ${image.alt}`}
                  aria-haspopup="dialog"
                  className="personal-image-button"
                  key={image.src}
                  onClick={() => {
                    setActiveIndex(images.findIndex((item) => item.src === image.src));
                    dialog.current?.showModal();
                  }}
                  type="button"
                >
                  <Image
                    alt={image.alt}
                    height={image.height}
                    sizes="(max-width: 780px) calc(100vw - 76px), 520px"
                    src={sitePath(image.src)}
                    width={image.width}
                  />
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* ponytail: the native dialog handles modal focus, Escape, and focus restoration. */}
      <dialog
        aria-labelledby="personal-viewer-title"
        className="personal-viewer"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onClose={() => setActiveIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        ref={dialog}
      >
        <div className="personal-viewer-header">
          <h2 id="personal-viewer-title">{activeImage?.topic ?? "Beyond the projects"}</h2>
          <span className="personal-viewer-count">{activeIndex === null ? 0 : activeIndex + 1} / {images.length}</span>
          <button
            aria-label="Close image viewer"
            autoFocus
            className="personal-viewer-control"
            onClick={() => dialog.current?.close()}
            type="button"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <figure className="personal-viewer-figure">
          <div className="personal-viewer-stage">
            {activeImage && (
              <Image
                alt={activeImage.alt}
                height={activeImage.height}
                sizes="(max-width: 780px) calc(100vw - 64px), 1000px"
                src={sitePath(activeImage.src)}
                width={activeImage.width}
              />
            )}
            <button
              aria-label="Previous image"
              className="personal-viewer-control personal-viewer-arrow personal-viewer-arrow--previous"
              onClick={() => navigate(-1)}
              type="button"
            >
              <ChevronLeft size={28} aria-hidden="true" />
            </button>
            <button
              aria-label="Next image"
              className="personal-viewer-control personal-viewer-arrow personal-viewer-arrow--next"
              onClick={() => navigate(1)}
              type="button"
            >
              <ChevronRight size={28} aria-hidden="true" />
            </button>
          </div>
          <figcaption aria-live="polite">
            {activeImage && `${activeImage.alt} · ${activeIndex! + 1} of ${images.length}`}
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
