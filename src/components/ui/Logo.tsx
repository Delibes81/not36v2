import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';
  const logoSrc = isDark ? '/kit-notaria36-logo/logo-notaria36.svg' : '/kit-notaria36-logo/logo-notaria36-reversa.svg';

  return (
    <img 
      src={logoSrc} 
      alt="Notaría 36 Ciudad de México" 
      className={`h-12 md:h-14 w-auto object-contain select-none transition-all duration-300 ${className}`} 
    />
  );
};

export default Logo;
