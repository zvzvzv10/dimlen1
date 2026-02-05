"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface Certificate {
  id: number;
  src: string;
  alt: string;
}

const equipmentImages: GalleryImage[] = [
  {
    src: "/images/equipment/equipment-1.jpg",
    alt: "Оборудование 1",
    category: "Оборудование"
  },
  {
    src: "/images/equipment/equipment-2.jpg",
    alt: "Оборудование 2",
    category: "Оборудование"
  }
];

const guaranteeImages: GalleryImage[] = [
  {
    src: "/images/services/certificates/cert-1.jpg",
    alt: "Сертификат 1",
    category: "Гарантии"
  },
  {
    src: "/images/services/certificates/cert-2.jpg",
    alt: "Сертификат 2",
    category: "Гарантии"
  },
  {
    src: "/images/services/certificates/cert-3.jpg",
    alt: "Сертификат 3",
    category: "Гарантии"
  },
  {
    src: "/images/services/certificates/cert-4.jpg",
    alt: "Сертификат 4",
    category: "Гарантии"
  },
  {
    src: "/images/services/certificates/cert-5.jpg",
    alt: "Сертификат 5",
    category: "Гарантии"
  },
  {
    src: "/images/services/certificates/cert-6.jpg",
    alt: "Сертификат 6",
    category: "Гарантии"
  }
];

const certificates: Certificate[] = [
  { 
    id: 1, 
    src: "/images/services/certificates/cert-1.jpg",
    alt: "Сертификат 1" 
  },
  { 
    id: 2, 
    src: "/images/services/certificates/cert-2.jpg",
    alt: "Сертификат 2" 
  },
  { 
    id: 3, 
    src: "/images/services/certificates/cert-3.jpg",
    alt: "Сертификат 3" 
  },
  { 
    id: 4, 
    src: "/images/services/certificates/cert-4.jpg",
    alt: "Сертификат 4" 
  },
  { 
    id: 5, 
    src: "/images/services/certificates/cert-5.jpg",
    alt: "Сертификат 5" 
  },
  { 
    id: 6, 
    src: "/images/services/certificates/cert-6.jpg",
    alt: "Сертификат 6" 
  },
];

export const EquipmentSection = () => {
  const [equipmentLightboxOpen, setEquipmentLightboxOpen] = useState(false);
  const [guaranteeLightboxOpen, setGuaranteeLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Equipment Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              number="06"
              title={
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Есть все, для комфортного исполнения{" "}
                    <span className="text-blue-600">вашей задачи</span>
                  </h2>
                </div>
              }
              subtitle={
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  Предлагаем широкий спектр оборудования, монтаж, гарантийное обслуживание 
                  и индивидуальный подход к каждому клиенту. Уже 30+ лет на рынке, 
                  проверенное качество и команда экспертов — выбирайте лучшее для своего проекта!
                </p>
              }
            />
          </div>

          {/* Right Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
                onClick={(swiper) => {
                  setLightboxIndex(swiper.realIndex);
                  setEquipmentLightboxOpen(true);
                }}
              >
                {equipmentImages.map((image, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index === 0}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Category Label */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full 
                          shadow-lg transition-all duration-300 group-hover:bg-black/60">
                          <span className="text-sm md:text-base text-white font-medium whitespace-nowrap">
                            {image.category}
                          </span>
                        </div>
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
                onClick={(swiper) => {
                  setLightboxIndex(swiper.realIndex);
                  setGuaranteeLightboxOpen(true);
                }}
              >
                {guaranteeImages.map((image, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index === 0}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Category Label */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full 
                          shadow-lg transition-all duration-300 group-hover:bg-black/60">
                          <span className="text-sm md:text-base text-white font-medium whitespace-nowrap">
                            {image.category}
                          </span>
                        </div>
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              number="07"
              title={
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-blue-600">Мы гарантируем</span> качество
                    и надежность
                  </h2>
                </div>
              }
              subtitle={
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  Прозрачные условия договоров, поставка сертифицированного оборудования, 
                  полная безопасность и соответствие нормам, поддержка на всех этапах сотрудничества
                </p>
              }
            />
          </div>
        </div>
      </div>

      {/* Lightboxes */}
      <Lightbox
        open={equipmentLightboxOpen}
        close={() => setEquipmentLightboxOpen(false)}
        index={lightboxIndex}
        slides={equipmentImages.map(image => ({ src: image.src }))}
      />
      <Lightbox
        open={guaranteeLightboxOpen}
        close={() => setGuaranteeLightboxOpen(false)}
        index={lightboxIndex}
        slides={guaranteeImages.map(image => ({ src: image.src }))}
      />
    </section>
  );
}; 