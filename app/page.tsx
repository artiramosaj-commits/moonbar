'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { About } from '@/components/sections/About';

import { Experience } from '@/components/sections/Experience';
import { ThisYearDJs } from '@/components/sections/ThisYearDJs';
import { Menu } from '@/components/sections/Menu';
import { Social } from '@/components/sections/Social';
import { Contact } from '@/components/sections/Contact';
import { LastYearMemories } from '@/components/sections/LastYearMemories';
import { LastYearArtists } from '@/components/sections/LastYearArtists';
import { SplashScreen } from '@/components/effects/SplashScreen';
import { HoursBar } from '@/components/sections/HoursBar';
import { SignatureSpot } from '@/components/sections/SignatureSpot';
import { BackToTop } from '@/components/ui/BackToTop';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-background noise-overlay">
        <Navbar />
        <HeroCarousel />
        <HoursBar />
        <About />
        <SignatureSpot />
        <Experience />
        <ThisYearDJs />
        <Menu />
        <LastYearMemories />
        <LastYearArtists />
        <div className="content-visibility-auto">
          <Social />
        </div>
        <div className="content-visibility-auto">
          <Contact />
        </div>
        <div className="content-visibility-auto">
          <Footer />
        </div>
        <BackToTop />
      </main>

      <AnimatePresence>
        {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      </AnimatePresence>
    </>
  );
}
