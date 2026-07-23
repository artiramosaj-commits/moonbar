import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-sm glass-card transition-all duration-500',
        className
      )}
    >
      {children}
    </div>
  );
}