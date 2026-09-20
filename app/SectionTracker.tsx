"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

export default function SectionTracker() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    let frame = 0;

    const syncNow = () => {
      const hash = window.location.hash.slice(1);
      if (hash === sections[sections.length - 1].id && document.getElementById(hash)) {
        setActive(hash);
        return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && window.scrollY >= maxScroll - 72) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const viewportHeight = window.innerHeight;
      const lastElement = elements[elements.length - 1];
      if (lastElement && lastElement.getBoundingClientRect().top <= viewportHeight * 0.68) {
        setActive(lastElement.id);
        return;
      }

      let next = elements[0]?.id ?? sections[0].id;
      let bestScore = Number.NEGATIVE_INFINITY;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const visibleRatio = visible / Math.min(rect.height || 1, viewportHeight);
        const proximity = 1 - Math.min(1, Math.abs(rect.top - viewportHeight * 0.36) / viewportHeight);
        const score = visibleRatio * 2 + proximity;

        if (score > bestScore) {
          bestScore = score;
          next = element.id;
        }
      });

      setActive(next);
    };

    const sync = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncNow);
    };

    syncNow();
    const syncSoon = () => window.setTimeout(syncNow, 120);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", syncSoon);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", syncSoon);
    };
  }, []);

  return (
    <div className="section-tracker" aria-label="Section navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          className={active === section.id ? "active" : ""}
          href={`#${section.id}`}
          aria-label={`Go to ${section.label}`}
          aria-current={active === section.id ? "true" : undefined}
          title={section.label}
          onClick={(event) => {
            const target = document.getElementById(section.id);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${section.id}`);
            setActive(section.id);
          }}
        >
          <span />
          <em>{section.label}</em>
        </a>
      ))}
    </div>
  );
}
