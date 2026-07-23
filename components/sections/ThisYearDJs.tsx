'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';

const artists = [
  {
    name: 'DJ Zono',
    date: 'June 27, 2026',
    image: '/images/artists/dj-zono.png',
    upcoming: false,
  },
  {
    name: 'DJ Lil Miss',
    date: 'July 4, 2026',
    image: '/images/artists/dj-lil-miss.png',
    upcoming: false,
  },
  {
    name: 'DJ Ace',
    date: 'July 11, 2026',
    image: '/images/artists/dj-ace.png',
    upcoming: false,
  },
  {
    name: 'Vesa Smolica',
    date: 'July 17, 2026',
    image: '/images/artists/vesa-smolica.png',
    upcoming: true,
  },
];

export function ThisYearDJs() {
  return (
    <section id="this-year-djs" className="relative py-20 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <SectionTitle
          overline="This Season's Talent"
          title="This Year's DJ's & Singers"
          subtitle="The artists setting the soundtrack for summer 2026."
        />

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {artists.map((artist, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6 md:gap-12`}
                >
                  <div className="hidden md:flex absolute left-[15px] top-1/2 -translate-y-1/2 w-[17px] h-[17px] rounded-full border-2 border-gold bg-background z-10" />

                  <div className={`flex-1 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'} w-full`}>
                    <div className="group relative rounded-sm overflow-hidden inline-block w-full max-w-lg">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 border border-gold/0 md:group-hover:border-gold/20 transition-all duration-500 pointer-events-none rounded-sm" />
                    </div>
                  </div>

                  <div className={`flex-1 md:py-8 ${isLeft ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    {artist.upcoming && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 text-gold text-[10px] tracking-[0.2em] uppercase font-body font-light mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        Upcoming
                      </span>
                    )}
                    <span className="inline-block text-gold-muted text-xs tracking-[0.25em] uppercase font-body font-light mb-2 md:mb-3">
                      {new Date(artist.date).toLocaleDateString('en-US', { weekday: 'long' })}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-5xl font-light text-text-primary mb-2 md:mb-3 leading-tight">
                      {artist.name}
                    </h3>
                    <p className="text-gold text-xs md:text-sm tracking-widest uppercase font-body font-light">
                      {artist.date}
                    </p>
                    <div className={`mt-4 md:mt-6 flex items-center gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="w-6 md:w-8 h-px bg-gold/40" />
                      <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold/60 font-body font-light">Performance</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="inline-flex items-center gap-3 px-5 md:px-6 py-3 rounded-full border border-gold/20 text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-body font-light">More artists to be announced</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
