'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <Image
          src="/images/brand/logo-splash.png"
          alt="MoonBar"
          width={300}
          height={120}
          className="w-80 h-auto md:w-96 object-contain"
          priority
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -inset-8 bg-gold/10 blur-[60px] rounded-full -z-10"
        />
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
        className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mt-8"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-gold/40 text-[10px] tracking-[0.4em] uppercase font-body font-light mt-6"
      >
        Premium Outdoor Lounge
      </motion.p>
    </motion.div>
  );
}
