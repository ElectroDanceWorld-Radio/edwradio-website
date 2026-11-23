"use client";

import { useParallax } from "../hooks/useParallax";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
}

/**
 * Wraps a section with a subtle parallax purple glow orb in the background
 * to create a sense of depth as the user scrolls.
 */
export default function ParallaxSection({ children, speed = 0.15 }: ParallaxSectionProps) {
  const ref = useParallax(speed);

  return (
    <div className="relative">
      {/* Parallax glow orb - moves at different speed than content */}
      <div
        ref={ref}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {children}
    </div>
  );
}
