'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-full transition-all group relative",
        // Base styles
        "font-medium tracking-wide",
        // Size variants
        size === "default" && "px-6 py-2.5 text-sm",
        size === "lg" && "px-8 py-3.5 text-base",
        // Color variants
        variant === "primary" && [
          "bg-[#2563EB] text-white",
          "hover:bg-blue-700",
          "shadow-[0_0_20px_rgba(37,99,235,0.35)]",
          "after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_12px_rgba(37,99,235,0.25)]"
        ],
        variant === "secondary" && [
          "bg-white text-gray-900",
          "hover:bg-gray-50",
          "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        ],
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight 
        className={cn(
          "transform group-hover:translate-x-1 transition-transform relative z-10",
          size === "default" && "w-4 h-4",
          size === "lg" && "w-5 h-5"
        )}
        strokeWidth={2.5}
      />
    </button>
  );
};
