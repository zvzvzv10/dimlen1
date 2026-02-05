"use client";

import React, { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

declare global {
  interface Window {
    ymaps: any;
  }
}

export const MapSection = () => {
  useEffect(() => {
    // Проверяем, не загружен ли уже скрипт
    if (document.getElementById('yandex-maps-script')) {
      // Если скрипт уже есть, просто инициализируем карту
      if (window.ymaps) {
        window.ymaps.ready(() => initMap());
      }
      return;
    }

    // Создаем скрипт только если его еще нет
    const script = document.createElement('script');
    script.id = 'yandex-maps-script';
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=83b677e9-975f-47c3-89ed-fceb0aa6be84&lang=ru_RU';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ymaps.ready(() => initMap());
    };

    return () => {
      // Очищаем только инстанс карты, но оставляем скрипт
      const mapInstance = document.getElementById('map');
      if (mapInstance) {
        mapInstance.innerHTML = '';
      }
    };
  }, []);

  const initMap = () => {
    // Проверяем, существует ли уже контейнер карты
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Очищаем контейнер перед инициализацией
    mapContainer.innerHTML = '';

    const map = new window.ymaps.Map('map', {
      center: [55.733239, 37.697172], // Обновленные координаты
      zoom: 16, // Увеличил зум для лучшей видимости места
      controls: ['zoomControl', 'fullscreenControl']
    });

    const placemark = new window.ymaps.Placemark([55.733239, 37.697172], {
      balloonContent: 'ООО "Фирма "Димлэн"'
    }, {
      preset: 'islands#blueCircleDotIcon'
    });

    map.geoObjects.add(placemark);
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-[50px] rounded-[32px] shadow-lg overflow-hidden" 
      id="map-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          number="10"
          title={
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Где мы <span className="text-blue-600">находимся</span>
              </h2>
            </div>
          }
          subtitle={
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              Приезжайте к нам в офис для личной консультации
            </p>
          }
        />

        <div className="mt-12">
          <div 
            id="map" 
            className="w-full h-[500px] rounded-[24px] shadow-lg overflow-hidden"
          />
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm md:text-base">г. Москва, вн. тер. г. муниципальный округ Нижегородский, ул. Скотопрогонная, д. 27/26, стр. 1</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Пн-Пт: 9:00-18:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}; 