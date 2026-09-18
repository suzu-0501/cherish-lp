"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.dataset.motionReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).dataset.revealState = "visible";
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10%",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
