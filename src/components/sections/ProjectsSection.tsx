"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ActionButton } from "../ui/ActionButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

interface ProjectImage {
  src: string;
  alt: string;
  category: string;
}

const projectImages: ProjectImage[] = [
  {
    src: "/images/projects/bolshevichka.png",
    alt: "Большевичка",
    category: "Проект"
  },
  {
    src: "/images/projects/evreiskiycentr.png",
    alt: "Еврейский центр",
    category: "Проект"
  },
  {
    src: "/images/projects/fazer.png",
    alt: "Фазер",
    category: "Проект"
  },
  {
    src: "/images/projects/gemotest.png",
    alt: "Гемотест",
    category: "Проект"
  },
  {
    src: "/images/projects/genetiki.png",
    alt: "Генетики",
    category: "Проект"
  },
  {
    src: "/images/projects/gutabank.png",
    alt: "Гута Банк",
    category: "Проект"
  },
  {
    src: "/images/projects/metailinvest.png",
    alt: "Металинвест",
    category: "Проект"
  },
  {
    src: "/images/projects/moldovia.png",
    alt: "Молдова",
    category: "Проект"
  },
  {
    src: "/images/projects/nagatino.png",
    alt: "Нагатино",
    category: "Проект"
  },
  {
    src: "/images/projects/NII.png",
    alt: "НИИ",
    category: "Проект"
  },
  {
    src: "/images/projects/problemupr.png",
    alt: "Проблемупр",
    category: "Проект"
  },

  {
    src: "/images/projects/talisman.png",
    alt: "Талисман",
    category: "Проект"
  },
  {
    src: "/images/projects/volgogradskiy.png",
    alt: "Волгоградский",
    category: "Проект"
  }
];

export const ProjectsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="projects"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Content - Project Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
                onClick={(swiper) => openLightbox(swiper.realIndex)}
              >
                {projectImages.map((image, index) => (
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
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Content - Text & CTA */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              number="04"
              title={
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-blue-600">Уже 1000+ реализованных проектов,</span>
                    <br />для наших клиентов
                  </h2>
                </div>
              }
              subtitle={
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  Просмотрите примеры наших работ
                </p>
              }
            />

            <div className="mt-8 md:mt-12">
              <ActionButton 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Смотреть больше</span>
                
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={projectImages.map(image => ({ src: image.src }))}
      />
    </section>
  );
};
