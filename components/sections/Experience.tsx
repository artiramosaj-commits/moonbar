'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';

function SlideshowCard({ title, images, interval, delay = 0, aspect = 'aspect-square', contain }: { title: string; images: string[]; interval: number; delay?: number; aspect?: string; contain?: boolean }) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const d = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(d);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval, started]);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className={`relative w-full ${aspect} rounded-sm overflow-hidden`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={contain ? 'object-contain' : 'object-cover object-center'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-6 md:w-8 h-px bg-gold/50 shrink-0" />
        <h3 className="font-display text-sm md:text-base lg:text-lg font-light text-text-primary tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
}

function StaticCard({ title, image, aspect = 'aspect-square' }: { title: string; image: string; aspect?: string }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className={`group relative w-full ${aspect} rounded-sm overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-white/5 group-hover:border-gold/20 transition-all duration-500 pointer-events-none rounded-sm" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-6 md:w-8 h-px bg-gold/50 shrink-0" />
        <h3 className="font-display text-sm md:text-base lg:text-lg font-light text-text-primary tracking-wide group-hover:text-gold-light transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}

const cocktailImgs = [
  '/images/menu/cocktail-1.png',
  '/images/menu/cocktail-2.png',
  '/images/menu/cocktail-3.png',
  '/images/menu/cocktail-4.jpeg',
];

const drinkImgs = [
  '/images/menu/beers.png',
  '/images/menu/go-for-the-glass.png',
  '/images/menu/shots.png',
];

const singerImgs = [
  '/images/artists/alberije.png',
  '/images/artists/bay-t.png',
  '/images/artists/vesa-smolica.png',
  '/images/artists/ramadan-dani.png',
];

const djImgs = [
  '/images/artists/dj-zono.png',
  '/images/artists/dj-lil-miss.png',
  '/images/artists/dj-ace.png',
  '/images/artists/gentrit-dj.png',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 lg:py-44 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <SectionTitle overline="The Experience" title="What Awaits You" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          <motion.div variants={itemVariants}>
            <SlideshowCard title="Signature Cocktails" images={cocktailImgs} interval={5000} delay={0} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SlideshowCard title="Drinks" images={drinkImgs} interval={5000} delay={1.5} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StaticCard title="Wines" image="/images/menu/wines.png" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StaticCard title="Shisha Lounge" image="/images/menu/shishas.png" />
          </motion.div>

          <motion.div variants={itemVariants} className="sm:col-span-2">
            <SlideshowCard title="Live Music" images={singerImgs} interval={6000} delay={0} aspect="aspect-[3/4]" contain />
          </motion.div>

          <motion.div variants={itemVariants} className="sm:col-span-2">
            <SlideshowCard title="DJ Nights" images={djImgs} interval={7000} delay={2} aspect="aspect-[3/4]" contain />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
