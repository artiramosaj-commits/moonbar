'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const ambientImages = [
  { mobile: '/images/hero/main-entrance-mobile.png', desktop: '/images/hero/main-entrance.png', alt: 'MoonBar entrance' },
  { mobile: '/images/hero/lounge-view-mobile.png', desktop: '/images/hero/lounge-view.png', alt: 'MoonBar lounge view' },
  { mobile: '/images/hero/bar-area-mobile.png', desktop: '/images/hero/bar-area.png', alt: 'MoonBar bar area' },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ambientImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + ambientImages.length) % ambientImages.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden bg-black animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {ambientImages.map((img, index) => (
        <div
          key={img.desktop}
          style={{ willChange: 'transform, opacity' }}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <picture className="relative block w-full h-full">
            <source media="(max-width: 768px)" srcSet={img.mobile} />
            <source media="(min-width: 769px)" srcSet={img.desktop} />
            <Image
              src={img.desktop}
              alt={img.alt}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>
      ))}

      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {ambientImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group py-2"
            aria-label={`Slide ${index + 1}`}
          >
            <div
              className={`h-[2px] transition-all duration-700 rounded-full ${
                index === current
                  ? 'w-10 md:w-12 bg-gold'
                  : 'w-5 md:w-6 bg-white/30 group-hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent z-10" />
    </section>
  );
}
