"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Какие гарантии?",
    answer: "Мы работаем официально, предоставляя полный пакет документов (коммерческое предложение, договор, акты выполненных работ и бухгалтерскую документацию). На монтаж и демонтаж лифтового оборудования действует гарантия – в течение гарантийного срока устраняем дефекты бесплатно. Гарантия на оборудование предоставляется производителем, а мы соблюдаем все его обязательства. Также гарантируем качество обслуживания и оперативное реагирование на аварийные ситуации."
  },
  {
    question: "Условия оплаты, постоплата платежа? ",
    answer: "Стандартно – предоплата перед началом работ и оплата остатка после монтажа и подписания акта сдачи-приемки. Для крупных проектов возможна поэтапная оплата, а для постоянных клиентов и крупных застройщиков рассматриваем вариант пост оплаты на индивидуальных условиях."
  },
  {
    question: "На каких объектах работаете? ",
    answer: "Наш опыт охватывает жилые дома (многоквартирные, коттеджи), коммерческие здания (торговые центры, офисы, гостиницы), промышленные предприятия (заводы, склады), объекты здравоохранения (больницы, поликлиники) и социальную инфраструктуру (школы, детские сады), а также специализированные объекты (например, лифты для инвалидов или грузовые лифты)."
  },
  {
    question: "Предоставляете ли консультацию по выбору лифта?",
    answer: "Да. Наши специалисты помогут подобрать оптимальное решение, учитывая тип здания, пассажиропоток, архитектурные особенности, бюджет, требования безопасности и энергоэффективность."
  },
  {
    question: "Какова стоимость установки лифта?",
    answer: "Стоимость зависит от множества факторов: типа лифта (пассажирский, грузовой, больничный и т.д.), грузоподъемности, количества остановок, высоты подъема, производителя, сложности монтажа (наличие готовой шахты, строительные работы) и региона установки. Для точной сметы необходимо предоставить подробные данные об объекте – свяжитесь с нами для бесплатного выезда специалиста и составления коммерческого предложения."
  },
  {
    question: "Какое оборудование подойдет для промышленного использования?",
    answer: "Мы рекомендуем следующие виды оборудования:\n\n• Грузовые лифты\n    Для перевозки тяжелых и крупногабаритных грузов\n\n• Ножничные и мачтовые подъемники\n    Для подъема грузов и персонала в ограниченных пространствах\n\n• Подъемники для автомобилей\n    Для автосервисов и парковок\n\n• Крановые подъемники\n    Для перемещения грузов в цехах и на складах\n\nВыбор оборудования зависит от специфики производства и эксплуатационных требований."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="faq"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          number="08"
          title={
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                <span className="text-blue-600">Ответы</span> на частые вопросы
                наших клиентов
              </h2>
            </div>
          }
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`bg-gray-50 rounded-[20px] cursor-pointer transition-all duration-500 ease-in-out
                ${openIndex === index ? 'bg-gray-100 shadow-md' : 'hover:bg-gray-100'}`}
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 transition-colors duration-300">
                  {index + 1}. {faq.question}
                </h3>
                <button 
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center
                    transition-all duration-500 ease-in-out transform
                    ${openIndex === index ? 'bg-blue-600 rotate-180 scale-110' : 'hover:scale-105'}`}
                  aria-label={openIndex === index ? "Свернуть" : "Развернуть"}
                >
                  <span className="text-white text-2xl font-light transition-transform duration-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index 
                    ? 'max-h-[500px] opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-4'}`}
              >
                <div className={`px-6 pb-6 transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
