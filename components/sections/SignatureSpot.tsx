'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function SignatureSpot() {
  return (
    <section id="signature-spot" className="relative py-20 md:py-32 lg:py-44 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-gold/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-body font-light">The Spot</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-text-primary leading-tight">
                The Moon{' '}
                <span className="italic text-gold">Lounge</span>
              </h2>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                A wooden crescent built into the edge of our garden, overlooking the city lights of Pejë. It&apos;s the kind of place where conversations last longer and photos actually come out good.
              </p>

              <div className="h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                By day it&apos;s a chill spot with a view. By night, it&apos;s the best seat in the house — city lights, good company, and the moon right above you. Everyone stops here for a picture sooner or later.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <span className="w-6 h-px bg-gold/30" />
                <span className="text-xs tracking-[0.25em] uppercase text-gold/40 font-body font-light">Best View in Town</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/5 to-transparent rounded-sm" />
              <div className="relative rounded-sm overflow-hidden image-frame">
                <Image
                  src="/images/signature-spot/lounge-bar.png"
                  alt="MoonBar crescent moon lounge with city view"
                  width={800}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
