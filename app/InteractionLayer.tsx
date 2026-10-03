"use client";

import { useEffect } from "react";

export default function InteractionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionScopes = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));
    const scopeVisibility = new Map<HTMLElement, boolean>();

    const setScopePlayback = (scope: HTMLElement, active: boolean) => {
      scope.classList.toggle("is-motion-visible", active);
      scope.querySelectorAll<SVGSVGElement>("svg").forEach((svg) => {
        if (active && !reducedMotion.matches) svg.unpauseAnimations();
        else svg.pauseAnimations();
      });
    };

    const syncPageVisibility = () => {
      root.classList.toggle("page-hidden", document.hidden);
      motionScopes.forEach((scope) => {
        setScopePlayback(scope, !document.hidden && scopeVisibility.get(scope) !== false);
      });
    };

    motionScopes.forEach((scope) => {
      const rect = scope.getBoundingClientRect();
      scopeVisibility.set(scope, rect.bottom > 0 && rect.top < window.innerHeight);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const scope = entry.target as HTMLElement;
        scopeVisibility.set(scope, entry.isIntersecting);
        setScopePlayback(scope, entry.isIntersecting && !document.hidden);
      });
    });
    motionScopes.forEach((scope) => observer.observe(scope));

    root.classList.add("motion-ready");
    reducedMotion.addEventListener("change", syncPageVisibility);
    document.addEventListener("visibilitychange", syncPageVisibility);
    syncPageVisibility();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPageVisibility);
      document.removeEventListener("visibilitychange", syncPageVisibility);
      motionScopes.forEach((scope) => scope.classList.remove("is-motion-visible"));
      root.classList.remove("motion-ready", "page-hidden");
    };
  }, []);

  return null;
}
