"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ActionButton } from "../ui/ActionButton";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    acceptPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          description: formData.description,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка при отправке заявки');
      }

      // Успешная отправка
      setSubmitStatus('success');
      
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        description: '',
        acceptPolicy: false
      });
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Ошибка при отправке заявки');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Форматирование телефонного номера
  const formatPhoneNumber = (value: string) => {
    // Убираем все нецифровые символы
    const phoneNumber = value.replace(/\D/g, '');
    
    // Форматируем номер
    if (phoneNumber.length === 0) return '';
    if (phoneNumber.length <= 1) return `+7 (${phoneNumber}`;
    if (phoneNumber.length <= 4) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumber.length <= 7) return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9) return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedPhone });
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="consultation"
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
                    <span className="text-blue-600">Оставьте заявку</span> и получите консультацию эксперта
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
            {submitStatus === 'success' ? (
              <div className="bg-green-50 p-8 rounded-[20px] border border-green-200 text-center">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Спасибо за заявку!</h3>
                <p className="text-gray-700 mb-6">Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300"
                >
                  Отправить еще заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  required
                  minLength={2}
                  disabled={isSubmitting}
                />
                
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  required
                  pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                  disabled={isSubmitting}
                />

                <textarea
                  placeholder="Описание задачи"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 rounded-[20px] text-gray-900 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300
                    resize-none"
                  required
                  minLength={10}
                  disabled={isSubmitting}
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
                    required
                    disabled={isSubmitting}
                  />
                  <label htmlFor="policy" className="text-gray-700 text-sm cursor-pointer select-none">
                    Я принимаю условия{" "}
                    <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 transition-colors">
                      политики конфиденциальности
                    </a>
                  </label>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-[16px] text-red-700 text-sm">
                    {errorMessage || 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.'}
                  </div>
                )}

                <div className="mt-4">
                  <ActionButton 
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg 
                      shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
                  </ActionButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 