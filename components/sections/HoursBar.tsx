import { Clock } from 'lucide-react';

export function HoursBar() {
  return (
    <section className="relative md:hidden overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated/50 to-background" />

      <div className="relative z-10 py-10 px-5 animate-fade-in-up">
        <div className="max-w-xs mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-gold/50" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/50 font-body font-light">Hours</span>
          </div>
          <p className="font-display text-2xl text-text-primary font-light tracking-wide mb-4">Monday - Sunday</p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold/20" />
            <span className="text-text-secondary text-sm font-body font-light tracking-wide">19:00 - 02:00</span>
            <span className="w-8 h-px bg-gold/20" />
          </div>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent mx-5" />
    </section>
  );
}
