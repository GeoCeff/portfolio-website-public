"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
};

export default function InteractionLayer() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    let frame = 0;

    const setPointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    const press = (event: PointerEvent) => {
      document.documentElement.classList.add("is-pressing");
      const id = Date.now();
      setSparks((items) => [...items.slice(-5), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => setSparks((items) => items.filter((item) => item.id !== id)), 650);
    };

    const release = () => document.documentElement.classList.remove("is-pressing");

    document.documentElement.classList.add("motion-ready");
    window.addEventListener("pointermove", setPointer, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointercancel", release, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready", "is-pressing");
      window.removeEventListener("pointermove", setPointer);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, []);

  return (
    <div className="interaction-layer" aria-hidden="true">
      <span className="pointer-flare" />
      <span className="signal-shard shard-one" />
      <span className="signal-shard shard-two" />
      <span className="signal-shard shard-three" />
      {sparks.map((spark) => (
        <span
          className="click-spark"
          key={spark.id}
          style={{ "--spark-x": `${spark.x}px`, "--spark-y": `${spark.y}px` } as CSSProperties}
        />
      ))}
    </div>
  );
}
