'use client';

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ActionButton } from "../ui/ActionButton";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    acceptPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              number="09"
              title={
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-blue-600">Оставьте заявку</span>
                    {" "}и получите консультацию эксперта
                  </h2>
                </div>
              }
              subtitle={
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  На консультации мы обсудим проект и ответим на все вопросы
                </p>
              }
            />
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
              />
              
              <input
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
              />

              <textarea
                placeholder="Описание задачи"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300
                  resize-none"
              />

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="policy"
                  checked={formData.acceptPolicy}
                  onChange={(e) => setFormData({ ...formData, acceptPolicy: e.target.checked })}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 
                    focus:ring-blue-500 focus:ring-offset-0 transition-all duration-300
                    cursor-pointer"
                />
                <label htmlFor="policy" className="text-gray-700 text-sm cursor-pointer select-none">
                  Я принимаю условия{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                    политики конфиденциальности
                  </a>
                </label>
              </div>

              <div className="mt-4">
                <ActionButton 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg 
                    shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                >
                  Оставить заявку
                </ActionButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
