"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ActionButton } from "../ui/ActionButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

interface ProjectMedia {
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
}

const projectMedia: ProjectMedia[] = [

 
  {
    src: "/images/projects_sections_1000/otdelka_montazh.jpg",
    alt: "отделка лифта",
    category: "Проект монтажа и отделки лифтов",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/podemnik.jpg",
    alt: "монтаж подъемника",
    category: "монтаж подъемника",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/lift_montazh_2.jpg",
    alt: "монтаж лифта",
    category: "монтаж лифта",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/otdelka_lifta.jpg",
    alt: "отделка лифта",
    category: "отделка лифта",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/montazh_gruzovogo.jpg",
    alt: "монтаж грузового лифта",
    category: "монтаж грузового лифта",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/escalator_montazh_2.jpg",
    alt: "монтаж эскалатора",
    category: "монтаж эскалатора",
    type: "image"
  },
  {
    src: "/images/projects_sections_1000/montazh_avto.jpg",
    alt: "монтаж автомобильного лифта",
    category: "монтаж автомобильного лифта",
    type: "image"
  },

  {
    src: "/images/services/gallery/pol.jpg",
    alt: "Замена напольного покрытия нестандартного размера",
    category: "Замена напольного покрытия нестандартного размера",
    type: "image"
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
                {projectMedia.map((media, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative w-full h-full">
                      {media.type === 'image' ? (
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority={index === 0}
                          quality={90}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          loop
                          muted
                        >
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {/* Category Label */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full 
                          shadow-lg transition-all duration-300 group-hover:bg-black/60">
                          <span className="text-sm md:text-base text-white font-medium whitespace-nowrap">
                            {media.category}
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
              
            />

            

            <div className="mt-8 md:mt-12">
         
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        plugins={[Video]}
        slides={projectMedia.map(media => 
          media.type === 'video' 
            ? {
                type: "video",
                poster: media.src.replace('.mp4', '.jpg'),
                sources: [{
                  src: media.src,
                  type: "video/mp4",
                }]
              }
            : {
                src: media.src,
                alt: media.alt
              }
        )}
      />
    </section>
  );
};
