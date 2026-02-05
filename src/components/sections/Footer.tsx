'use client';

import React from "react";
import { ActionButton } from "../ui/ActionButton";
import Image from "next/image";
import Link from "next/link";
import { scrollToContact } from "@/lib/scrollUtils";

export const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#181818] text-white rounded-[40px] p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              ООО "Фирма "Димлэн"<br />
              ООО "Димлен"
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <a 
                href="tel:+79099089101" 
                className="text-lg hover:text-blue-400 transition-colors"
              >
                +7 (909) 908-91-01
              </a>
              <a 
                href="mailto:dimlen_leonid@mail.ru" 
                className="text-lg hover:text-blue-400 transition-colors"
              >
                dimlen_leonid@mail.ru<br />
                <span className="text-gray-400">(Почта директора)</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Links & Text */}
            <div className="space-y-8">
              <Link 
                href="/privacy-policy" 
                className="text-lg hover:text-blue-400 transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <p className="text-lg">
                Вам нужен лифт В эксплуатации надежный?<br />
                Звоните нам! Димлэн всегда поможет!
              </p>
            </div>

            {/* CTA & Address */}
            <div className="space-y-8">
              <ActionButton 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 
                  rounded-full text-lg shadow-xl hover:shadow-blue-500/20 
                  hover:scale-105 transition-all duration-300"
                onClick={(e) => {
                  console.log("Footer button clicked");
                  scrollToContact(e);
                }}
              >
                Оставить заявку
              </ActionButton>
              <address className="text-lg not-italic text-gray-300 leading-relaxed">
                109 029, г. Москва, вн. тер. г. муниципальный округ Нижегородский,
                ул. Скотопрогонная, д. 27/26, стр. 1
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
    
    </footer>
  );
};
