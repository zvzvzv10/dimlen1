'use client';

import React from "react";
import { ActionButton } from "../ui/ActionButton";
import { SectionTitle } from "../ui/SectionTitle";
import { scrollToContact } from "@/lib/scrollUtils";

export const WhyChooseUs = () => {
  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg" 
      id="benefits"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          number="02"
          title={
            <div className="flex flex-col md:flex-row items-baseline gap-3 md:gap-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                Почему
              </h2>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 tracking-tight">
                выбирают нас?
              </span>
            </div>
          }
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
          {/* Feature 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold text-gray-500">01</span>
              <div className="h-px flex-grow bg-gray-900/75 rounded-full" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Гарантия качества
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Соответствие государственным требованиям стандартов
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold text-gray-500">02</span>
              <div className="h-px flex-grow bg-gray-900/75 rounded-full" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              30+ лет опыта
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Профессиональная команда с богатым опытом работы
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold text-gray-500">03</span>
              <div className="h-px flex-grow bg-gray-900/75 rounded-full" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              750+ единиц
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              обслуживаемого оборудования разных масштабов
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold text-gray-500">04</span>
              <div className="h-px flex-grow bg-gray-900/75 rounded-full" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Собственный склад
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Оперативные поставки и минимальные сроки
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <ActionButton 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            onClick={scrollToContact}
          >
            Оставить заявку
          </ActionButton>
        </div>
      </div>
    </section>
  );
};
