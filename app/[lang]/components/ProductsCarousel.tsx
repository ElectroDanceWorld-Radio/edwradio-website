"use client";

import { useState } from "react";
import { getAssetPath } from './getAssetPath';

type ProductItem = {
  title: string;
  subtitle: string;
};

type ProductsCarouselProps = {
  heading: string;
  products: ProductItem[];
  buyText: string;
};

const productLinks = [
  'https://shop.beacons.ai/electrodanceworldradio/782a1aea-db78-413e-8255-3063b9fed91b',
  'https://shop.beacons.ai/electrodanceworldradio/2a7f6a1f-3e33-4feb-960d-b444bd4ff503',
  'https://shop.beacons.ai/electrodanceworldradio/0e4da8c4-20f2-4598-8991-ed8e75a3de43',
  'https://shop.beacons.ai/electrodanceworldradio/10d07cb5-0621-42a1-b4b5-1311aaa63012',
  'https://shop.beacons.ai/electrodanceworldradio/e37e0680-d9cb-462a-b3b6-c70bceb1f3e9',
  'https://shop.beacons.ai/electrodanceworldradio/48871cfc-5b98-4db2-a419-85c4d58c9c0f',
  'https://shop.beacons.ai/electrodanceworldradio/e6ac668b-b636-43b7-8187-6dc29d438e61',
  'https://shop.beacons.ai/electrodanceworldradio/65633461-5c89-4c14-ae4b-74384cb90e24',
  'https://shop.beacons.ai/electrodanceworldradio/51b68ff3-677b-43be-a814-1649c752dd6b',
];

export default function ProductsCarousel({ heading, products, buyText }: ProductsCarouselProps) {
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

  const perSlide = 2;
  const totalSlides = Math.ceil(products.length / perSlide);

  const prev = () => setIndex((i) => (i === 0 ? totalSlides - 1 : i - 1));
  const next = () => setIndex((i) => (i === totalSlides - 1 ? 0 : i + 1));

  const visibleProducts = products.slice(index * perSlide, index * perSlide + perSlide);

  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-purple w-64 md:w-96 h-64 md:h-96 -top-32 md:-top-48 -left-32 md:-left-48" />
      <div className="bg-orb bg-orb-blue w-64 md:w-80 h-64 md:h-80 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gradient mb-3 title-bg">{heading}</h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Product cards grid - 2 at a time */}
          <div className="grid grid-cols-2 gap-4">
            {visibleProducts.map((product, i) => {
              const globalIndex = index * perSlide + i;
              return (
                <div
                  key={globalIndex}
                  className="glass rounded-xl overflow-hidden shadow-xl card-hover p-6 flex flex-col items-center"
                >
                  {/* Product image */}
                  <div
                    className="h-48 w-full rounded-lg mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${getAssetPath(`/product${globalIndex + 1}.webp`)})` }}
                  />

                  {/* Product info */}
                  <h3 className="text-xl font-semibold text-white mb-1">{product.title}</h3>
                  <p className="text-purple-300 text-sm font-medium mb-4 text-center">{product.subtitle}</p>

                  <a
                    href={productLinks[globalIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-auto text-center block rounded-lg py-2.5 text-white font-semibold no-underline w-full"
                  >
                    {buyText}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Previous products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full bg-[#6f2adb] text-white hover:bg-[#8245e2] transition-all duration-300 hover:scale-110"
            aria-label="Next products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-purple-300"
                  : "w-3 h-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to products ${i * perSlide + 1}-${Math.min((i + 1) * perSlide, products.length)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
