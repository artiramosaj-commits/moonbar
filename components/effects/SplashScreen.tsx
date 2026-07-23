'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 1800);
    const exitTimer = setTimeout(() => setPhase('exit'), 3400);
    const doneTimer = setTimeout(onFinish, 4400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            phase === 'exit'
              ? { opacity: 0, scale: 0.9 }
              : { opacity: 1, scale: 1 }
          }
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
            animate={{ opacity: phase === 'enter' ? 0.6 : phase === 'hold' ? 1 : 0 }}
            transition={{ duration: 0.8, delay: phase === 'enter' ? 0.6 : 0 }}
            className="absolute -inset-8 bg-gold/10 blur-[60px] rounded-full -z-10"
          />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={
            phase === 'hold'
              ? { width: '100%' }
              : { width: phase === 'exit' ? '100%' : '0%' }
          }
          transition={
            phase === 'hold'
              ? { duration: 1.5, ease: 'easeInOut' }
              : { duration: 0.3 }
          }
          className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mt-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={
            phase === 'hold'
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -10 }
          }
          transition={{ duration: 0.6 }}
          className="text-center text-gold/40 text-[10px] tracking-[0.4em] uppercase font-body font-light mt-6"
        >
          Premium Outdoor Lounge
        </motion.p>
      </div>
    </motion.div>
  );
}
