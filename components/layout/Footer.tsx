'use client';

import { Instagram, MapPin, Phone } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/moonbarpeje/', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@moonbarpeje', label: 'TikTok' },
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-16 py-16 md:py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          <div className="sm:col-span-2">
            <div className="mb-5 md:mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-light text-gold tracking-wide mb-3 md:mb-4">MoonBar</h3>
              <div className="w-12 md:w-16 h-px bg-gold/60 mb-3 md:mb-4" />
              <p className="text-text-secondary text-xs md:text-sm tracking-[0.15em] uppercase font-body font-light">Lounge Shisha Bar</p>
            </div>

            <p className="text-text-secondary text-sm md:text-base mb-5 md:mb-6 max-w-md leading-relaxed">
              The heart of summer nights in Pejë. Premium cocktails, shisha, live music, and unforgettable evenings under the stars.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 md:w-11 h-10 md:h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 active:scale-90"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base md:text-lg mb-5 md:mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm md:text-base hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base md:text-lg mb-5 md:mb-6 text-gold">Visit Us</h4>
            <ul className="space-y-3 md:space-y-4 text-text-secondary text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 mt-0.5 flex-shrink-0 text-gold" />
                <span>Peklen Pejë<br />Kosovo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 text-gold" />
                <span>+383 44 840 410</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-text-subtle text-xs md:text-sm">
            &copy; 2026 MoonBar Pejë. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-text-subtle">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Summer Season
            </span>
            <span className="w-px h-3 md:h-4 bg-gold/20" />
            <span>Made with &hearts; in Kosovo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
