'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/Card';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: 'Peklen Pejë\nBregu i zi, Kosovo',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+383 44 840 410',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Monday - Sunday\n19:00 - 02:00',
  },
  {
    icon: MessageCircle,
    title: 'Social',
    content: 'Instagram: @moonbarpeje\nTikTok: @moonbarpeje',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 lg:py-44 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 md:w-96 h-32 md:h-96 bg-gold/5 rounded-full blur-[60px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-32 md:w-96 h-32 md:h-96 bg-gold/5 rounded-full blur-[60px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-16">
        <SectionTitle
          overline="Find Us"
          title="Visit MoonBar"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <GlassCard className="p-4 md:p-6 h-full">
                    <item.icon className="w-4 md:w-5 h-4 md:h-5 text-gold mb-3 md:mb-4" />
                    <h3 className="font-display text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-xs md:text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>

            <div
              className="p-5 md:p-8 rounded-sm glass-card animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs text-gold uppercase tracking-widest font-body font-light">Open Now</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-light mb-2 md:mb-3">Reserve Your Spot</h3>
              <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">
                For reservations and special requests, please call us or message us on Instagram.
              </p>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full">
                <a
                  href="https://wa.me/38344840410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 md:col-span-1 inline-flex items-center justify-center gap-2 px-4 md:px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  Text Now
                </a>
                <a
                  href="https://www.instagram.com/moonbarpeje/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm md:text-base"
                >
                  <Instagram className="w-4 h-4" />
                  Message Us
                </a>
                <a
                  href="https://www.tiktok.com/@moonbarpeje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm md:text-base"
                >
                  <TikTokIcon className="w-4 h-4" />
                  Message Us
                </a>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=42.6785363,20.2774136"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full mt-2 md:mt-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm md:text-base"
              >
                <MapPin className="w-3.5 md:w-4 h-3.5 md:h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[280px] md:h-[400px] lg:h-auto rounded-sm overflow-hidden border border-gold/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601!2d20.2774136!3d42.6785363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fda5c7dd7135%3A0xc0325aeb600c9e4e!2sMoon+Bar+Peje!5e0!3m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'hue-rotate(180deg) invert(1) brightness(0.9) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MoonBar Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
