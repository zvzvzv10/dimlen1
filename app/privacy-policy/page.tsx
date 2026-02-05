import React from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться на главную
            </Link>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Политика конфиденциальности
            </h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Общие положения</h2>
                <p className="leading-relaxed">
                  Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ООО "Фирма "Димлэн" (далее – "Компания").
                </p>
                <p className="leading-relaxed mt-4">
                  Компания стремится к защите конфиденциальности персональных данных пользователей и соблюдает все требования законодательства о защите персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Сбор и использование информации</h2>
                <p className="leading-relaxed">
                  Компания собирает персональные данные, которые пользователи предоставляют при:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Заполнении форм на сайте</li>
                  <li>Отправке заявок на обслуживание</li>
                  <li>Связи с нами по телефону или электронной почте</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Безопасность данных</h2>
                <p className="leading-relaxed">
                  Компания принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий в отношении персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Передача данных третьим лицам</h2>
                <p className="leading-relaxed">
                  Компания не передает персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Права пользователей</h2>
                <p className="leading-relaxed">
                  Пользователи имеют право:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Получать информацию, касающуюся обработки их персональных данных</li>
                  <li>Требовать уточнения их персональных данных, их блокирования или уничтожения</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                </ul>
              </section>

             

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Изменения в политике конфиденциальности</h2>
                <p className="leading-relaxed">
                  Компания оставляет за собой право вносить изменения в настоящую политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 