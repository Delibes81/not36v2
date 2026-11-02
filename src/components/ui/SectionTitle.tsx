import React from 'react';
import { cn } from '../../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  dark = false,
  className,
}) => {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', 'mb-12', className)}>
      <h2 className={cn('font-heading text-3xl font-semibold sm:text-4xl md:text-5xl', dark ? 'text-white' : 'text-primary-900')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg', dark ? 'text-primary-200' : 'text-neutral-600')}>
          {subtitle}
        </p>
      )}
      <div className={cn('mt-4 h-1 w-24', dark ? 'bg-accent-400' : 'bg-accent-500', centered ? 'mx-auto' : '')} />
    </div>
  );
};

export default SectionTitle;
