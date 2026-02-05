import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { Award, Users, Shield, Target } from "lucide-react";
import { Media } from "@/lib/media";

export const AboutSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-[50px]" id="about">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-[55%]">
            <div className="flex flex-col">
              <SectionTitle
                number="01"
                title={
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                      Опыт и профессионализм
                    </div>
                    <span className="block text-blue-600 text-2xl md:text-3xl font-bold mt-3">
                      — проверенные временем
                    </span>
                  </div>
                }
                subtitle={
                  <div className="space-y-4">
                    <p className="mt-1 text-gray-700 text-lg md:text-xl leading-relaxed">
                      Группа компаний ООО "Фирма "Димлэн" ООО "Димлен" — это более 30 лет работы 
                      в сфере лифтового-подъемного оборудования.
                    </p>
                    <p className="mt-1 text-gray-700 text-lg md:text-xl leading-relaxed">
                      Мы обслуживаем 750+ единиц лифтового-подъемного оборудования на более чем 
                      100 объектах в Москве и Подмосковье
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Right Content - Grid Cards */}
          <div className="lg:w-[45%]">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Card 1 */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-[22px] flex flex-col min-h-[160px]">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-900 text-sm md:text-base font-semibold mt-4 md:mt-6">
                  90+ заключенных контрактов в системе госзакупок
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-[22px] flex flex-col min-h-[160px]">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-900 text-sm md:text-base font-semibold mt-4 md:mt-6">
                  Многолетние отношения с клиентами: работаем с объектами 30+ лет
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-[22px] flex flex-col min-h-[160px]">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-900 text-sm md:text-base font-semibold mt-4 md:mt-6">
                  Прозрачность: налоги, договоры и процессы соответствуют всем стандартам
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-[22px] flex flex-col min-h-[160px]">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-900 text-sm md:text-base font-semibold mt-4 md:mt-6">
                  Полная вовлеченность на всех уровнях от монтажников до генерального директора
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
