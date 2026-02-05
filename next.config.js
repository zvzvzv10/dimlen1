/** @type {import('next').NextConfig} */
const nextConfig = {
  // Вот эта строчка — самая главная для работы в облаке!
  output: 'standalone', 
  
  images: {
    domains: ["localhost"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;