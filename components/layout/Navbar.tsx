'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#signature-spot', label: 'The Lounge' },
  { href: '#experience', label: 'Experience' },
  { href: '#menu', label: 'Menu' },
  { href: '#social', label: 'Social' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'py-3 md:py-4 glass border-b border-gold/10'
            : 'py-4 md:py-5 bg-gradient-to-b from-black/30 to-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display text-lg md:text-2xl font-light text-gold tracking-wide">MoonBar</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-body font-light text-text-secondary uppercase tracking-wider hover:text-gold transition-colors duration-300 group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-body font-light">Open</span>
                <span className="text-xs tracking-wide text-text-secondary font-body font-light">Mon - Sun</span>
              </div>
              <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Reserve
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-gold active:scale-90 transition-transform"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background-elevated border-l border-gold/10"
            >
              <div className="flex flex-col h-full p-6 md:p-8">
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display text-lg text-gold">MoonBar</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-11 h-11 flex items-center justify-center text-gold active:scale-90 transition-transform"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-2xl md:text-3xl font-light text-text-secondary hover:text-gold transition-colors py-4 border-b border-gold/5"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-8 border-t border-gold/10 mt-6">
                  <Button variant="primary" size="lg" className="w-full" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }}>
                    Reserve a Table
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
