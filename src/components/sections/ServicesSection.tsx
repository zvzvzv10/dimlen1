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

interface ImageWithFallback {
  src: string;
  alt: string;
  category: string;
}

interface Certificate {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: ImageWithFallback[] = [
  {
    src: "/images/services/gallery/photo_2025-02-24_02-23-23.jpg",
    alt: "Лифтовое оборудование 1",
    category: "Монтаж под ключ"
  },
  {
    src: "/images/services/gallery/photo_2025-02-24_02-23-29.jpg",
    alt: "Лифтовое оборудование 2",
    category: "Эксплуатация"
  },
  {
    src: "/images/services/gallery/photo_2025-02-24_02-23-34.jpg",
    alt: "Лифтовое оборудование 3",
    category: "Обслуживание"
  },
  {
    src: "/images/services/gallery/photo_2025-02-24_02-23-37.jpg",
    alt: "Лифтовое оборудование 4",
    category: "Демонтаж"
  },
  {
    src: "/images/services/gallery/photo_2025-02-24_02-23-42.jpg",
    alt: "Лифтовое оборудование 5",
    category: "Модернизация"
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

export const ServicesSection = () => {
  const [galleryLightboxOpen, setGalleryLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openGalleryLightbox = (index: number) => {
    setLightboxIndex(index);
    setGalleryLightboxOpen(true);
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="services"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Title Section */}
        <div className="mb-12 md:mb-16 w-full">
          <SectionTitle
            number="03"
            title={
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  <span className="text-blue-600">Наши услуги:</span> полный спектр
                  работ с лифтовым-подъемным оборудованием
                </h2>
              </div>
            }
            subtitle={
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-1">
                Лифтовое-подъемное оборудование любых видов: лифты, подъемники, эскалаторы, травалаторы
              </p>
            }
          />
        </div>

        {/* Gallery */}
        <div className="w-full">
          <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] shadow-xl group cursor-pointer w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
              onClick={(swiper) => openGalleryLightbox(swiper.realIndex)}
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative w-full h-full bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain md:object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      priority={index === 0}
                      quality={90}
                      sizes="100vw"
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

      {/* Lightbox */}
      <Lightbox
        open={galleryLightboxOpen}
        close={() => setGalleryLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map(image => ({ src: image.src }))}
      />
    </section>
  );
};
