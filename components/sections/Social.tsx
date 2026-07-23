'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Instagram, Heart, Bookmark, Users } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
import { useCountUp } from '@/lib/hooks/useCountUp';

const instagramStats = [
  { label: 'Followers', value: 1444, icon: Users },
  { label: 'Posts', value: 24, icon: Bookmark },
];

const tiktokStats = [
  { label: 'Followers', value: 1645, icon: Users },
  { label: 'Likes', value: 106000, icon: Heart },
];

function formatNum(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return String(n);
}

function StatCard({ label, value, icon: Icon }: { label: string; value: number; icon: any }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center">
      <Icon className="w-3.5 h-3.5 mx-auto mb-1 text-gold/50" />
      <span
        ref={ref}
        className="block font-display text-xl md:text-2xl font-light text-gold tabular-nums"
      >
        {formatNum(count)}+
      </span>
      <span className="text-[10px] md:text-xs text-text-subtle uppercase tracking-wider font-body font-light">
        {label}
      </span>
    </div>
  );
}

function PlatformCard({
  name,
  icon,
  stats,
  href,
  followLabel,
}: {
  name: string;
  icon: React.ReactNode;
  stats: { label: string; value: number; icon: any }[];
  href: string;
  followLabel: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="block relative p-8 md:p-10 rounded-sm border border-gold/10 bg-background-elevated/50 hover:-translate-y-1 hover:border-gold/30 transition-all duration-500 group cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute -inset-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(138,114,69,0.15)]" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 group-hover:shadow-[0_0_15px_rgba(138,114,69,0.2)] transition-all duration-500">
            {icon}
          </div>
          <span className="font-display text-xl md:text-2xl font-light text-gold">{name}</span>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 text-gold text-xs md:text-sm tracking-wider uppercase font-body font-light group-hover:bg-gold group-hover:text-background group-hover:border-gold transition-all duration-500">
          {icon}
          <span>{followLabel}</span>
        </div>
      </div>
    </motion.a>
  );
}

export function Social() {
  return (
    <section id="social" className="relative py-20 md:py-32 lg:py-44 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gold/5 rounded-full blur-[60px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <SectionTitle
          overline="Follow Us"
          title="@moonbarpeje"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          <PlatformCard
            name="Instagram"
            icon={<Instagram className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
            stats={instagramStats}
            href="https://www.instagram.com/moonbarpeje/"
            followLabel="Follow"
          />
          <PlatformCard
            name="TikTok"
            icon={<TikTokIcon className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
            stats={tiktokStats}
            href="https://www.tiktok.com/@moonbarpeje"
            followLabel="Follow"
          />
        </div>


      </div>
    </section>
  );
}
