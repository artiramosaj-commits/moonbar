'use client';

import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-background hover:bg-gold-light hover:text-black active:scale-[0.98]',
    secondary: 'bg-transparent border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold-light/50 active:scale-[0.98]',
    ghost: 'bg-transparent text-gold hover:text-gold-light active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}