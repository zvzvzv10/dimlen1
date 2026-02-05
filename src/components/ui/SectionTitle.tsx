'use client';

import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  number: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  number,
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-baseline gap-4">
        <span className="text-sm text-gray-500">{number}</span>
        <div className="h-px w-[260px] bg-gray-900 rounded-full" />
      </div>
      <div className="mt-6">
        {title}
      </div>
      <div className="mt-6">
        {subtitle}
      </div>
    </div>
  );
};
