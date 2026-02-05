"use client";

import React, { useState, useRef, useEffect } from "react";
import { ActionButton } from "@/components/ui/ActionButton";
import { Phone, Clock, Mail, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Media } from "@/lib/media";
import { HeaderBackground } from "../ui/HeaderBackground";
import Image from 'next/image';
import Link from "next/link";
import { FloatingActionButton } from "../ui/FloatingActionButton";
import { scrollToContact } from "@/lib/scrollUtils";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header 
        className="relative flex w-full flex-col pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-[50px] rounded-[28px] max-w-[1400px] mx-auto overflow-hidden min-h-[600px] md:min-h-[700px]"
        style={{
          backgroundImage: `
            linear-gradient(180deg, 
              rgba(17, 24, 39, 0.95) 0%, 
              rgba(17, 24, 39, 0.98) 100%
            ),
            url('/images/header-bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src="/images/header-bg.jpg"
          alt="Background"
          fill
          className="object-cover z-0 opacity-50"
          priority
        />

        {/* Content Container */}
        <div className="relative z-10">
          <nav className="flex w-full items-center justify-between mb-8 md:mb-16 relative">
            {/* Desktop Navigation */}
            <Media greaterThanOrEqual="lg">
              <div className="flex items-center space-x-6 text-gray-300 text-sm">
                <a href="#about" className="hover:text-white transition-colors duration-200">О нас</a>
                <a href="#benefits" className="hover:text-white transition-colors duration-200">Преимущества</a>
                <a href="#services" className="hover:text-white transition-colors duration-200">Услуги</a>
                <a href="#projects" className="hover:text-white transition-colors duration-200">Проекты</a>
                <a href="#equipment" className="hover:text-white transition-colors duration-200">Оборудование</a>
                <a href="#guarantees" className="hover:text-white transition-colors duration-200">Гарантии</a>
              </div>
            </Media>

            {/* Mobile Navigation */}
            <Media lessThan="lg">
              <button 
                className="absolute left-0 top-0 p-2 text-white hover:text-gray-200 transition-colors z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {isMobileMenuOpen && (
                <div className="absolute top-12 left-0 w-full bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl py-4 z-40">
                  <div className="flex flex-col">
                    <a href="#about" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">О нас</a>
                    <a href="#benefits" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">Преимущества</a>
                    <a href="#services" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">Услуги</a>
                    <a href="#projects" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">Проекты</a>
                    <a href="#equipment" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">Оборудование</a>
                    <a href="#guarantees" className="px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">Гарантии</a>
                  </div>
                </div>
              )}
            </Media>

            {/* Contact Info */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Phone Number - Always Visible */}
              <div className="flex flex-col items-end relative" ref={phoneDropdownRef}>
                <button
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                  className="text-base font-medium text-white hover:text-gray-200 transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4" />
                  <span>+7 (909) 908-91-01</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPhoneDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Пн-Пт: с 9:00 до 18:00 по МСК
                </span>

                {/* Phone Numbers Dropdown */}
                <div
                  className={`absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl py-3 px-4 min-w-[200px] transform transition-all duration-200 ease-in-out ${
                    isPhoneDropdownOpen 
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-300 mb-2 pb-2 border-b border-gray-700">
                    Доп. номера
                  </div>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="tel:+74957556152" 
                      className="text-white hover:text-gray-200 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +7 (495) 755-61-52
                    </a>
                    <a 
                      href="tel:+74957556153" 
                      className="text-white hover:text-gray-200 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +7 (495) 755-61-53
                    </a>
                  </div>
                </div>
              </div>

              {/* Email - Hidden on Mobile */}
              <Media greaterThan="md">
                <div className="flex flex-col items-end">
                  <a
                    href="mailto:Lift@dimlen.ru"
                    className="text-base font-medium text-white hover:text-gray-200 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Lift@dimlen.ru
                  </a>
                  <span className="text-xs text-gray-400 mt-1">круглосуточно</span>
                </div>
              </Media>

              <ActionButton 
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full items-center justify-center shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                onClick={(e) => {
                  console.log("Header nav button clicked");
                  scrollToContact(e);
                }}
              >
                <span>Оставить заявку</span>
              </ActionButton>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto px-4 mb-20">
            <p className="text-gray-200 text-lg md:text-xl font-medium mb-6 md:mb-8">
            Ваш надежный партнер в сфере лифтового-подъемного<br />оборудования

            </p>

            <Media lessThan="md">
              <h1 className="text-white text-3xl font-bold leading-tight mb-6">
                ООО "Димлэн" <br />
                ООО "Димлен"
              </h1>
            </Media>

            <Media greaterThanOrEqual="md">
              <h1 className="text-white text-5xl font-bold leading-tight mb-8 max-w-[900px]">
                ООО "Фирма "Димлэн"<br />ООО "Димлен"
              </h1>
            </Media>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-[800px]">
              Монтаж, демонтаж, эксплуатация и обслуживание лифтов с гарантией качества и профессионализмом
            </p>

            <ActionButton 
              className="w-full sm:w-auto max-w-[280px] bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 text-lg font-medium"
              onClick={(e) => {
                console.log("Header hero button clicked");
                scrollToContact(e);
              }}
            >
              <span>Оставить заявку</span>
            </ActionButton>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(17, 24, 39, 0.8) 100%)'
          }}
        />
      </header>
      <FloatingActionButton />
    </>
  );
};
