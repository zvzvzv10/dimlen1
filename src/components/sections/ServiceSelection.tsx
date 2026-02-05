"use client";

import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ActionButton } from "../ui/ActionButton";
import { scrollToContact } from "@/lib/scrollUtils";

const services = [
  {
    title: "Монтаж лифтов",
    description: "Профессиональная установка лифтового оборудования любой сложности с соблюдением всех технических норм",
  },
  {
    title: "Демонтаж",
    description: "Безопасный демонтаж устаревшего или подлежащего замене лифтового оборудования",
  },
  {
    title: "Обслуживание лифтов",
    description: "Комплексное техническое обслуживание и поддержка работоспособности лифтового оборудования",
  },
  {
    title: "Диспетчеризация лифтов",
    description: "Установка современных систем диспетчерского контроля и мониторинга работы лифтов",
  },
  {
    title: "Отделка и монтаж",
    description: "Отделка лифтовых кабин, монтаж лифтовых порталов и лифтовых шахт под ключ",
  },
  {
    title: "Работа со всеми типами",
    description: "Обслуживание грузовых лифтов, автомобильных лифтов, подъемников, эскалаторов",
  },
  {
    title: "Диагностика",
    description: "Профессиональная диагностика состояния и выявление неисправностей лифтового оборудования",
  },
  {
    title: "Проектирование",
    description: "Сотрудничество с ведущими проектными организациями Москвы в сфере лифтового оборудования",
  },
  {
    title: "Ремонт оборудования",
    description: "Качественный ремонт лифтового оборудования любой сложности",
  },
  {
    title: "Продажа оборудования",
    description: "Поставка качественного лифтового оборудования от ведущих производителей",
  }
];

export const ServiceSelection = () => {
  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg" 
      id="services"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          number="03"
          title={
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Наши <span className="text-blue-600">услуги</span>
              </h2>
            </div>
          }
          subtitle={
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              Полный спектр услуг по монтажу и обслуживанию лифтового оборудования
            </p>
          }
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-[24px] p-6 shadow-lg hover:shadow-xl transition-all duration-300
                       border border-gray-100 hover:border-blue-500/20 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-lg font-semibold text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px flex-grow bg-gray-200 group-hover:bg-blue-500/20 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-500 mb-6">
            Нужна консультация по услугам?
          </p>
          <ActionButton 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg 
                     shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            onClick={(e) => {
              console.log("Get consultation button clicked");
              scrollToContact(e);
            }}
          >
            Получить консультацию
          </ActionButton>
        </div>
      </div>
    </section>
  );
}; 