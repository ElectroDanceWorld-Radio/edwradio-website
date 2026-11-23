"use client";

import { useEffect, useRef } from "react";

/**
 * Applies a subtle vertical parallax transform to an element based on scroll position.
 * @param speed - Parallax speed factor (0–1). Higher = more movement. Default 0.3.
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Initial position
    updateParallax();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
