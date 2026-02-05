# 1. БАЗОВЫЙ ОБРАЗ
FROM node:20-alpine AS base

# 2. УСТАНОВКА ЗАВИСИМОСТЕЙ
FROM base AS deps
# Alpine требует libc6-compat для корректной работы некоторых библиотек
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json ./
# Устанавливаем всё, включая sharp для обработки картинок
RUN npm ci && npm install sharp

# 3. СБОРКА ПРОЕКТА
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Отключаем телеметрию Next.js во время сборки
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 4. ЗАПУСК ПРИЛОЖЕНИЯ (Runner)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем пользователя, чтобы не запускать от имени root (безопасность)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# ВАЖНО: Копируем папку public, чтобы картинки были доступны
COPY --from=builder /app/public ./public

# Устанавливаем правильные права доступа
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем результат сборки в режиме standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Запускаем сервер
CMD ["node", "server.js"]