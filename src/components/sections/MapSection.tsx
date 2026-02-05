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
      if (window.ymaps) {
        window.ymaps.ready(() => {
          console.log('Yandex Maps API loaded');
          initMap();
        });
      } else {
        console.error('Yandex Maps API not loaded');
      }
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
    try {
      // Проверяем, существует ли уже контейнер карты
      const mapContainer = document.getElementById('map');
      if (!mapContainer) {
        console.error('Map container not found');
        return;
      }

      // Очищаем контейнер перед инициализацией
      mapContainer.innerHTML = '';

      const map = new window.ymaps.Map('map', {
        center: [55.733239, 37.697172],
        zoom: 10, // Уменьшаем зум для более широкого обзора
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Первая метка - обновленный адрес офиса
      const placemark1 = new window.ymaps.Placemark([55.733239, 37.697172], {
        balloonContent: '109 029, г. Москва, вн. тер. г. муниципальный округ Нижегородский, ул. Скотопрогонная, д. 27/26, стр. 1',
        iconCaption: 'Офис Димлен'
      }, {
        preset: 'islands#blueDotIconWithCaption'
      });

      // Вторая метка - обновленный адрес склада
      const placemark2 = new window.ymaps.Placemark([55.598329, 37.639635], {
        balloonContent: 'г. Москва, ул. Подольских курсантов, д. 19',
        iconCaption: 'Склад'
      }, {
        preset: 'islands#redDotIconWithCaption'
      });

      // Третья метка - адрес Димлэн
      const placemark3 = new window.ymaps.Placemark([55.596401, 37.647531], {
        balloonContent: 'г. Москва, ул. Подольских курсантов, д. 24',
        iconCaption: 'Офис Димлэн'
      }, {
        preset: 'islands#greenDotIconWithCaption'
      });

      map.geoObjects.add(placemark1);
      map.geoObjects.add(placemark2);
      map.geoObjects.add(placemark3);

      // Устанавливаем границы карты, чтобы были видны все метки
      map.setBounds(map.geoObjects.getBounds(), {
        checkZoomRange: true,
        duration: 200
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
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

        <div className="mt-8 flex flex-col gap-6 text-gray-700">
          <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Адрес офиса Димлен:
            </h3>
          
            <address className="text-lg not-italic text-gray-600 leading-relaxed mb-2 ml-9">
            г. Москва, вн. тер. г. муниципальный округ Нижегородский, ул. Скотопрогонная, д. 27/26, стр. 1
            </address>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Адрес склада:
            </h3>
           
            <address className="text-lg not-italic text-gray-600 leading-relaxed ml-9">
              г. Москва, ул. Подольских курсантов, д. 19
            </address>

            <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Адрес офиса Димлэн:
            </h3>
          
            <address className="text-lg not-italic text-gray-600 leading-relaxed ml-9">
              г. Москва, Харьковский проезд, д. 1 к. 2
            </address>
          </div>
          
          <div className="flex items-center gap-3 ml-2">
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