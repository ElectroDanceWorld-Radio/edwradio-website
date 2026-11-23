"use client";

import { useState, useRef, useEffect } from "react";

const playlistUrls = [
  "https://open.spotify.com/embed/playlist/08KWxKkBn3cOdsOlBawhEC?utm_source=generator",
  "https://open.spotify.com/embed/playlist/027A3DN89FURE5SLdHVE5E?utm_source=generator",
  "https://open.spotify.com/embed/playlist/0k1L3fJr5ok5r8qWzjBttW?utm_source=generator",
  "https://open.spotify.com/embed/playlist/4iykerHeuREdyOt30t9xNV?utm_source=generator",
  "https://open.spotify.com/embed/playlist/7JHN9IB9sMXlP00fI3vWGR?utm_source=generator",
  "https://open.spotify.com/embed/playlist/24WCocynQjuFpVinjYZhst?utm_source=generator",
  "https://open.spotify.com/embed/playlist/1QYtD3jOTOcbKxaVuOgiOz?utm_source=generator",
  "https://open.spotify.com/embed/playlist/1YKBWIZxdvUaKTyyQlFk33?utm_source=generator",
  "https://open.spotify.com/embed/playlist/1Bj53BgkOH43MiC3VwVI3F?utm_source=generator",
  "https://open.spotify.com/embed/playlist/5Kbav9vvkHQ0gVQpihIXxP?utm_source=generator",
  "https://open.spotify.com/embed/playlist/7li1nJESdGcs8xbZuW99gr?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/playlist/6ZH9nKVWusH92YR0N9t3NK?utm_source=generator",
  "https://open.spotify.com/embed/playlist/0Qt12c5t1HAh67A562idlC?utm_source=generator",
  "https://open.spotify.com/embed/playlist/4hvRARa0aprMx4GOwYgj6A?utm_source=generator",
  "https://open.spotify.com/embed/playlist/4Xngyx6OtQiqLNOOg49APz?utm_source=generator",
  "https://open.spotify.com/embed/playlist/0jJQYRcaCYe65gICSStczm?utm_source=generator",
  "https://open.spotify.com/embed/playlist/5oyEbiMll95HQWl52duLP2?utm_source=generator",
  "https://open.spotify.com/embed/playlist/7ofEAtnLdg5mMjNrNPHEgt?utm_source=generator",
  "https://open.spotify.com/embed/playlist/4wDMJCzl5dsxwzmSM38QuP?utm_source=generator",
];

export default function PlaylistCarousel() {
  const [indexMobile, setIndexMobile] = useState(0);
  const [indexDesktop, setIndexDesktop] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set([0, 1, 2]));

  const minSwipeDistance = 50;
  const perSlideMobile = 1;
  const perSlideDesktop = 3;
  const totalSlidesMobile = Math.ceil(playlistUrls.length / perSlideMobile);
  const totalSlidesDesktop = Math.ceil(playlistUrls.length / perSlideDesktop);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Load iframes for currently visible slides plus adjacent ones
  useEffect(() => {
    const indicesToLoad: Set<number> = new Set();

    // Desktop visible range
    const desktopStart = indexDesktop * perSlideDesktop;
    const desktopEnd = Math.min(desktopStart + perSlideDesktop, playlistUrls.length);
    for (let i = desktopStart - 1; i < desktopEnd + 1; i++) {
      if (i >= 0 && i < playlistUrls.length) indicesToLoad.add(i);
    }

    // Mobile visible range
    const mobileStart = indexMobile * perSlideMobile;
    const mobileEnd = Math.min(mobileStart + perSlideMobile, playlistUrls.length);
    for (let i = mobileStart - 1; i < mobileEnd + 1; i++) {
      if (i >= 0 && i < playlistUrls.length) indicesToLoad.add(i);
    }

    setLoadedIndices((prev) => {
      const next = new Set(prev);
      indicesToLoad.forEach((i) => next.add(i));
      return next;
    });
  }, [indexDesktop, indexMobile]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextMobile();
    else if (isRightSwipe) prevMobile();
  };

  const prevMobile = () => setIndexMobile((i) => (i === 0 ? totalSlidesMobile - 1 : i - 1));
  const nextMobile = () => setIndexMobile((i) => (i === totalSlidesMobile - 1 ? 0 : i + 1));
  const prevDesktop = () => setIndexDesktop((i) => (i === 0 ? totalSlidesDesktop - 1 : i - 1));
  const nextDesktop = () => setIndexDesktop((i) => (i === totalSlidesDesktop - 1 ? 0 : i + 1));

  const visiblePlaylistsMobile = playlistUrls.slice(
    indexMobile * perSlideMobile,
    indexMobile * perSlideMobile + perSlideMobile
  );
  const visiblePlaylistsDesktop = playlistUrls.slice(
    indexDesktop * perSlideDesktop,
    indexDesktop * perSlideDesktop + perSlideDesktop
  );

  return (
    <div
      ref={carouselRef}
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Mobile: single playlist */}
      <div className="grid grid-cols-1 md:hidden">
        {visiblePlaylistsMobile.map((url, i) => {
          const globalIndex = indexMobile * perSlideMobile + i;
          return (
            <div key={globalIndex} className="glass-light rounded-xl overflow-hidden relative">
              {loadedIndices.has(globalIndex) ? (
                <>
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={url}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="pointer-events-none"
                  />
                  {/* Transparent overlay to capture touch events for swiping */}
                  <div
                    className="absolute inset-0 z-10"
                    style={{ touchAction: "none" }}
                  />
                </>
              ) : (
                <div
                  className="w-full h-[352px] bg-gray-800/50 rounded-xl flex items-center justify-center"
                >
                  <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop: 3 playlists at a time */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-4">
        {visiblePlaylistsDesktop.map((url, i) => {
          const globalIndex = indexDesktop * perSlideDesktop + i;
          return (
            <div key={globalIndex} className="glass-light rounded-xl overflow-hidden">
              {loadedIndices.has(globalIndex) ? (
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={url}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-[352px] bg-gray-800/50 rounded-xl flex items-center justify-center"
                >
                  <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Arrow buttons - desktop */}
      <button
        onClick={prevDesktop}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
        aria-label="Previous playlists"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        onClick={nextDesktop}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
        aria-label="Next playlists"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* Arrow buttons - mobile (hidden, swipe only) */}
      <button
        onClick={prevMobile}
        className="hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-10 h-10 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
        aria-label="Previous playlist"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        onClick={nextMobile}
        className="hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-10 h-10 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
        aria-label="Next playlist"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* Dots indicator - mobile */}
      <div className="flex justify-center gap-3 mt-6 md:hidden">
        {Array.from({ length: totalSlidesMobile }, (_, i) => (
          <button
            key={i}
            onClick={() => setIndexMobile(i)}
            className={`rounded-full transition-all duration-300 ${
              i === indexMobile
                ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-purple-300"
                : "w-3 h-3 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to playlist ${i + 1}`}
          />
        ))}
      </div>

      {/* Dots indicator - desktop */}
      <div className="hidden md:flex justify-center gap-3 mt-6">
        {Array.from({ length: totalSlidesDesktop }, (_, i) => (
          <button
            key={i}
            onClick={() => setIndexDesktop(i)}
            className={`rounded-full transition-all duration-300 ${
              i === indexDesktop
                ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-purple-300"
                : "w-3 h-3 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to playlists ${i * perSlideDesktop + 1}-${Math.min((i + 1) * perSlideDesktop, playlistUrls.length)}`}
          />
        ))}
      </div>
    </div>
  );
}
