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
        <img 
          src="https://i.ibb.co/0RXhd9bR/Adobe-Express-file.png" 
          alt="Scalora Labs Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <span className="font-heading font-extrabold text-xl tracking-tighter metallic-gradient bg-clip-text text-transparent">
          SCALORA LABS
        </span>
      )}
    </div>
  );
};
