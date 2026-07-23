'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';

const memories = [
  { src: '/images/memories/memory-01.jpg', label: 'Good vibes' },
  { src: '/images/memories/memory-02.jpg', label: 'Summer 2025' },
  { src: '/images/memories/memory-03.jpg', label: 'Moonlit' },
  { src: '/images/memories/memory-04.jpg', label: 'Late nights' },
  { src: '/images/memories/memory-05.jpg', label: 'Crowd favourites' },
  { src: '/images/memories/memory-06.jpg', label: 'Weekend energy' },
  { src: '/images/memories/memory-07.jpg', label: 'Vibes only' },
  { src: '/images/memories/memory-08.jpg', label: 'Summer nights' },
  { src: '/images/memories/memory-09.jpg', label: 'Under the moon' },
  { src: '/images/memories/memory-10.jpg', label: 'Golden hour' },
  { src: '/images/memories/memory-11.jpg', label: 'Pure joy' },
  { src: '/images/memories/memory-12.jpg', label: 'Last call' },
  { src: '/images/memories/memory-13.jpg', label: 'Until next time' },
];

export function LastYearMemories() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const len = memories.length;

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % len);
  }, [len]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + len) % len);
  }, [len]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="memories" className="relative py-20 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated/40 to-background" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-5 md:px-6"
      >
        <SectionTitle
          overline="Summer 2025"
          title="Last Year's Memories"
          subtitle="Candid moments from our first season together."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-sm overflow-hidden">
            <div className="absolute inset-0 border border-gold/20 rounded-sm pointer-events-none z-20" />

            <div className="absolute inset-3 md:inset-5 bg-black/40 rounded-sm z-10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 300, opacity: 0, scale: 0.95 }),
                  center: { x: 0, opacity: 1, scale: 1 },
                  exit: (d: number) => ({ x: d * -300, opacity: 0, scale: 0.95 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-3 md:inset-5 rounded-sm overflow-hidden"
              >
                <Image
                  src={memories[current].src}
                  alt="MoonBar memory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority={current < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-20">
              <span className="text-xs tracking-[0.2em] uppercase text-gold/80 font-light">
                {memories[current].label}
              </span>
              <div className="h-px w-8 bg-gold/40 mt-1.5" />
            </div>

            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 z-20">
              <span className="text-xs text-white/40 font-mono">
                {String(current + 1).padStart(2, '0')}/{String(len).padStart(2, '0')}
              </span>
            </div>

            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300 text-lg"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300 text-lg"
              aria-label="Next"
            >
              &#8250;
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {memories.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? 'w-8 bg-gold' : 'w-1.5 bg-white/15 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
