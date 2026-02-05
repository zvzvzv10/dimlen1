"use client";

import { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";

export const FloatingActionButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <ActionButton 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full 
                   shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50
                   hover:scale-105 transition-all duration-300
                   animate-fade-slide-up animate-pulse-subtle"
      >
   
          Оставить заявку
          
       
      </ActionButton>
    </div>
  );
}; 