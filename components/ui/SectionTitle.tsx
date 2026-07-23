import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  overline,
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12 md:mb-20', centered && 'text-center', className)}>
      {overline && (
        <p className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 font-light animate-fade-in-up">
          {overline}
        </p>
      )}

      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight px-4 md:px-0 animate-fade-in-up">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 md:mt-6 text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4 md:px-0 animate-fade-in-up">
          {subtitle}
        </p>
      )}
    </div>
  );
}
