/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dimlen.ru',
          },
        ],
        destination: 'https://dimlen.ru/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    // Это разрешает оптимизацию для локальных картинок
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