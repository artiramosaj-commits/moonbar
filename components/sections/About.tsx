'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useCountUp } from '@/lib/hooks/useCountUp';

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);

  function formatNum(n: number) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return String(n);
  }

  return (
    <div className="text-center">
      <p className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-gold tabular-nums">
        <span ref={ref}>{formatNum(count)}</span>{suffix}
      </p>
      <p className="text-text-subtle text-xs md:text-sm mt-1">{label}</p>
    </div>
  );
}

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setHasPlayed(true);
          el.play().catch(() => {});
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section id="about" className="relative pt-24 md:pt-36 lg:pt-48 pb-20 md:pb-32 lg:pb-44 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <SectionTitle
          overline="Our Essence"
          title="A Summer Sanctuary"
        />

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent rounded-sm" />

              <div className="absolute -inset-3 md:-inset-4 rounded-sm pointer-events-none shadow-[0_0_25px_rgba(138,114,69,0.15),0_0_60px_rgba(138,114,69,0.05)]" />

              <div className="image-frame rounded-sm overflow-hidden relative">
                <video
                  ref={videoRef}
                  src="/videos/about-showcase.mp4"
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noremoteplayback"
                  preload="auto"
                  className="w-full aspect-[9/14] md:aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 text-text-primary leading-tight">
                Born from the love of{' '}
                <span className="italic text-gold">gatherings</span>
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                MoonBar emerged from a simple vision: create a space where summer nights become unforgettable. Nestled in the heart of Pejë, we&apos;ve become the destination for those seeking more than just a drink.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />

            <div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 text-text-primary leading-tight">
                Crafted{' '}
                <span className="italic text-gold">moments</span>
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                Every cocktail tells a story, every playlist sets a mood, and every evening is designed to transport you. From our signature mixes to our extensive shisha selection, we believe in quality without compromise.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-2 md:pt-4"
            >
              <StatItem target={20} suffix="+" label="Special Nights" />
              <StatItem target={3000} suffix="+" label="Visitors" />
              <StatItem target={2} suffix="+" label="Years Running" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
