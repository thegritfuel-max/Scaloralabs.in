import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  const variants = {
    primary: 'bg-growth-green text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
    secondary: 'bg-white text-black hover:bg-white/90',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'h-10 px-6 text-[11px]',
    md: 'h-12 px-7 text-[13px]',
    lg: 'h-14 px-10 text-[15px]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-sans font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
