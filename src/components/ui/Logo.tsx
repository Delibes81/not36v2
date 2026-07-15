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
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex gap-x-1.5 items-end">
        <span className={`font-sans font-bold text-3xl md:text-4xl tracking-tight leading-none ${textColor}`}>
          Notaría
        </span>
        <span className={`font-sans font-bold text-3xl md:text-4xl tracking-tight leading-none ${textColor}`}>
          36
        </span>
      </div>
      <div className="flex justify-between items-center w-full mt-1">
        <span className={`font-sans font-bold text-[0.6rem] md:text-[0.7rem] tracking-[0.12em] uppercase ${subTextColor}`}>
          Ciudad de México
        </span>
        <div className="flex flex-col w-[2rem] md:w-[2.5rem] h-[0.35rem] md:h-[0.45rem] self-center">
          <div className="h-[60%] w-full bg-accent-500"></div>
          <div className="h-[40%] w-full bg-primary-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
