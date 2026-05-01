import { cn } from '@/src/lib/utils';
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Geometric Hexagon/Folded Icon */}
        <div className="absolute inset-0 metallic-gradient rounded-lg rotate-45 transform transition-transform duration-500 hover:rotate-90" />
        <div className="absolute inset-[3px] bg-primary-black rounded-[6px] rotate-45" />
        <div className="relative z-10 w-4 h-4 bg-white rounded-full metallic-gradient shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </div>
      {showText && (
        <span className="font-heading font-extrabold text-xl tracking-tighter metallic-gradient bg-clip-text text-transparent">
          SCALORA LABS
        </span>
      )}
    </div>
  );
};
