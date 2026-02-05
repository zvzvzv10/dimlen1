"use client";

import React, { useRef, useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Еврейский центр толерантности",
    image: "/images/projects/evreiskiycentr.png",
    description: "Обслуживание лифтового оборудования"
  },
  {
    id: 2,
    name: "Технопарк Нагатино",
    image: "/images/projects/nagatino.png",
    description: "Комплексное обслуживание лифтов"
  },
  {
    id: 3,
    name: "Гута Банк",
    image: "/images/projects/gutabank.png",
    description: "Обслуживание лифтового оборудования"
  },
  {
    id: 4,
    name: "Большевичка",
    image: "/images/projects/bolshevichka.png",
    description: "Техническое обслуживание лифтов"
  },
 
  {
    id: 6,
    name: "Талисман",
    image: "/images/projects/talisman.png",
    description: "Обслуживание лифтов"
  },
  {
    id: 7,
    name: "ПШО «Москва»",
    image: "/images/projects/genetiki.jpg",
    description: "Обслуживание лифтов"
  },
  {
    id: 8,
    name: "Гемотест",
    image: "/images/projects/gemotest.jpg",
    description: "Техническое обслуживание"
  },
  {
    id: 9,
    name: "Институт проблем управления",
    image: "/images/projects/problemupr.png",
    description: "Обслуживание лифтового оборудования"
  },
  {
    id: 10,
    name: "ФГУП 18 НИИ МО РФ",
    image: "/images/projects/NII.png",
    description: "Комплексное обслуживание"
  },
 

  {
    id: 13,
    name: "Волгоградский",
    image: "/images/projects/volgogradskiy.png",
    description: "Комплексное обслуживание лифтов"
  },
 

];

export const TrustedBySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section 
        className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
        id="projects"
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionTitle
            number="04"
            title={
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  Нам <span className="text-blue-600">доверяют</span>
                </h2>
              </div>
            }
            subtitle={
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                Крупнейшие объекты под нашим обслуживанием
              </p>
            }
          />

          <div className="relative mt-12">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 -translate-x-1/2 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 translate-x-1/2 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Projects Carousel */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide relative"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-6 pb-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="flex-none w-[380px] bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div 
                      className="relative h-[220px] w-full cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Более 750 единиц обслуживаемого оборудования по всей Москве
            </p>
          </div>
        </div>
      </section>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-[90vw] h-[90vh] max-w-7xl">
            <Image
              src={selectedImage}
              alt="Full size image"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}; 