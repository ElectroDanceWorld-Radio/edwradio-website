"use client";

import { useParallax } from "../hooks/useParallax";

interface ParallaxBackgroundProps {
  imageUrl: string;
  fallbackColor?: string;
  speed?: number;
  className?: string;
}

export default function ParallaxBackground({
  imageUrl,
  fallbackColor = "#1a1a2e",
  speed = 0.3,
  className = "absolute inset-0 z-0",
}: ParallaxBackgroundProps) {
  const ref = useParallax(speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: fallbackColor,
        willChange: "transform",
        // Extend height beyond container so parallax movement doesn't expose blank space
        height: "120%",
        top: "-10%",
      }}
    />
  );
}
