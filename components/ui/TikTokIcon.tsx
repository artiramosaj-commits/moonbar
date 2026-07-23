import { type LucideProps } from 'lucide-react';

export function TikTokIcon({ size = 24, className, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M14 2h-3v13.5a3.5 3.5 0 1 1-3.5-3.5V9a6.5 6.5 0 1 0 6.5 6.5V2Z" />
      <path d="M17 7a5 5 0 0 0 4-4h-4V2h4V0h-3a5 5 0 0 0 5 5v4a9 9 0 0 1-9 9h-2v-3h2a6 6 0 0 0 3-1V7Z" />
    </svg>
  );
}
