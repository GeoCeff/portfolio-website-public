"use client";

import { KeyboardEvent, PointerEvent, useEffect, useRef, useState } from "react";

function getScrollMetrics() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  return { max, progress: Math.min(1, Math.max(0, progress)) };
}

export default function ScrollRail() {
  const railRef = useRef<HTMLElement | null>(null);
  const draggingRef = useRef(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sync = () => setProgress(getScrollMetrics().progress);

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollFromPointer = (clientY: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const rect = rail.getBoundingClientRect();
    const localY = Math.min(rect.height, Math.max(0, clientY - rect.top));
    const nextProgress = rect.height > 0 ? localY / rect.height : 0;
    const { max } = getScrollMetrics();

    window.scrollTo({
      top: max * nextProgress,
      behavior: draggingRef.current ? "auto" : "smooth"
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    scrollFromPointer(event.clientY);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (draggingRef.current) {
      scrollFromPointer(event.clientY);
    }
  };

  const stopDragging = (event: PointerEvent<HTMLElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const { max, progress: current } = getScrollMetrics();
    const steps: Record<string, number> = {
      ArrowDown: 0.06,
      ArrowUp: -0.06,
      PageDown: 0.18,
      PageUp: -0.18,
      Home: -current,
      End: 1 - current
    };
    const step = steps[event.key];
    if (step === undefined) return;

    event.preventDefault();
    window.scrollTo({ top: max * Math.min(1, Math.max(0, current + step)), behavior: "smooth" });
  };

  return (
    <aside
      ref={railRef}
      className="side-rail left scroll-rail"
      aria-label="Page scroll position"
      role="scrollbar"
      aria-controls="portfolio-content"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
    >
      <span style={{ top: `${progress * 100}%` }} />
    </aside>
  );
}
