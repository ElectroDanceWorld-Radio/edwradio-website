"use client";

import { useState } from "react";
import Link from "next/link";
import { getAssetPath } from './getAssetPath';
import { NewsArticle, getThumbnailMedia } from './NewsCard';

type NewsLatestCarouselProps = {
  articles: NewsArticle[];
  heading: string;
  basePath?: string;
};

function formatDisplayDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function NewsLatestCarousel({ articles, heading, basePath }: NewsLatestCarouselProps) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

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
    if (isLeftSwipe) next();
    else if (isRightSwipe) prev();
  };

  const prev = () => setIndex((i) => (i === 0 ? articles.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === articles.length - 1 ? 0 : i + 1));

  if (!articles || articles.length === 0) return null;

  const item = articles[index];
  const thumbnail = getThumbnailMedia(item.media);
  const imageUrl = thumbnail?.type === 'image' ? getAssetPath(thumbnail.src) : thumbnail?.type === 'video' && thumbnail.poster ? getAssetPath(thumbnail.poster) : undefined;

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gradient mb-3 title-bg">{heading}</h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="flex items-center gap-4">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Previous news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* News card */}
          <div
            className="flex-1 relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Link href={basePath ? `./${basePath}/${item.id}` : `./${item.id}`} className="block group">
              <div className="rounded-2xl overflow-hidden shadow-xl card-hover glass-light transition-all duration-300">
                {/* Image */}
                <div
                  className="h-56 sm:h-80 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'linear-gradient(135deg, #6f2adb 0%, #8245e2 100%)' }}
                />

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    {item.category && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {item.category}
                      </span>
                    )}
                    <span className="text-purple-300 text-sm font-medium tracking-wide">
                      {formatDisplayDate(item.date)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg line-clamp-3">{item.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Next news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-purple-300"
                  : "w-3 h-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to news ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
