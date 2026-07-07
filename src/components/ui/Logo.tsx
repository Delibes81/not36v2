import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-primary-900' : 'text-white';
  const subTextColor = isDark ? 'text-primary-800' : 'text-primary-100';

  return (
    <div className={`grid grid-cols-[auto_auto] gap-x-2 gap-y-0.5 select-none items-center ${className}`}>
      <span className={`font-sans font-bold text-3xl md:text-4xl tracking-tight leading-none ${textColor}`}>
        Notaría
      </span>
      <span className={`font-sans font-bold text-3xl md:text-4xl tracking-tight leading-none ${textColor}`}>
        36
      </span>
      <span className={`font-sans font-semibold text-[0.45rem] md:text-[0.6rem] tracking-[0.12em] uppercase ${subTextColor}`}>
        De la Ciudad de México
      </span>
      <div className="flex flex-col w-full h-[0.5rem] md:h-[0.7rem] self-start mt-0.5">
        <div className="h-[60%] w-full bg-accent-500"></div>
        <div className="h-[40%] w-full bg-primary-800"></div>
      </div>
    </div>
  );
};

export default Logo;
