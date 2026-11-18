"use client";

import { useState } from "react";

type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

type NewsCarouselProps = {
  heading: string;
  news: NewsItem[];
};

export default function NewsCarousel({ heading, news }: NewsCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? news.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === news.length - 1 ? 0 : i + 1));

  const item = news[index];

  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-pink w-96 h-96 -top-48 -right-48" />
      <div className="bg-orb bg-orb-purple w-80 h-80 -bottom-40 -left-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gradient mb-3 title-bg">{heading}</h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="relative glass-light rounded-2xl overflow-hidden shadow-xl card-hover">
          {/* Image */}
          <div
            className="h-48 sm:h-72 w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          {/* Content */}
          <div className="p-8">
            <p className="text-purple-300 text-sm font-medium mb-2 tracking-wide uppercase">{item.date}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{item.excerpt}</p>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Previous news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Next news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {news.map((_, i) => (
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
