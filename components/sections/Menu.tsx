'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';

const slideshowImages = [
  '/images/menu/cocktail-1.png',
  '/images/menu/cocktail-2.png',
  '/images/menu/cocktail-3.png',
  '/images/menu/cocktail-4.jpeg',
];

const cards = [
  {
    img: '/images/menu/beers.png',
    variants: {
      offscreen: { opacity: 0, y: 40, scale: 0.97 },
      onscreen: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    },
  },
  {
    img: '/images/menu/shots.png',
    variants: {
      offscreen: { opacity: 0, y: -30, scale: 0.96 },
      onscreen: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    },
  },
  {
    img: '/images/menu/wines.png',
    variants: {
      offscreen: { opacity: 0, x: 40, scale: 0.97 },
      onscreen: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    },
  },
  {
    img: '/images/menu/shishas.png',
    variants: {
      offscreen: { opacity: 0, scale: 0.92 },
      onscreen: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    },
  },
  {
    img: '/images/menu/go-for-the-glass.png',
    variants: {
      offscreen: { opacity: 0, y: 50, scale: 0.95 },
      onscreen: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
    },
  },
];

export function Menu() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next = (slideIndex + newDir + slideshowImages.length) % slideshowImages.length;
    setPage([next, newDir]);
    setSlideIndex(next);
  };

  useEffect(() => {
    const t = setInterval(() => paginate(1), 3500);
    return () => clearInterval(t);
  }, [slideIndex]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="menu" className="relative py-16 md:py-28 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10">
        <div className="px-5 md:px-6 lg:px-16 max-w-5xl mx-auto">
          <SectionTitle
            overline="Our Selection"
            title="What We Offer"
            subtitle="A curated menu of premium drinks and lounge favourites."
          />
        </div>

        <div className="px-5 md:px-6 lg:px-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8">
          <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-gold/10 shadow-xl shadow-black/40">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slideshowImages[slideIndex]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {slideshowImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { const d = i > slideIndex ? 1 : -1; setPage([i, d]); setSlideIndex(i); }}
                  className={`rounded-full transition-all duration-500 ${
                    i === slideIndex ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: '-80px' }}
              variants={card.variants}
              className="relative aspect-square w-full rounded-sm overflow-hidden border border-gold/10 shadow-xl shadow-black/40"
            >
              <Image
                src={card.img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
