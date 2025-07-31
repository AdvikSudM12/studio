import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export const Section = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) => {
  return (
    <section
      className={cn(
        'container mx-auto px-4 md:px-6 py-16 md:py-24',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
