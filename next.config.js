/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        // Если запрос пришел на корень (/) с хоста www.dimlen.ru
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.dimlen.ru',
          },
        ],
        // Перенаправить на основной домен
        destination: 'https://dimlen.ru',
        permanent: true,
      },
    ]
  },
  images: {
    // Оставляем ваши настройки картинок
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;