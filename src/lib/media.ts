"use client";

import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
})

// Генерируем стили для SSR
export const mediaStyles = AppMedia.createMediaStyle()

// Экспортируем компоненты
export const { Media, MediaContextProvider } = AppMedia 