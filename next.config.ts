import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайт полностью статический: собирается в папку out/ и выкладывается на Firebase Hosting
  output: "export",
  images: {
    // Оптимизации картинок на лету нет без сервера; изображения уже сжаты заранее
    unoptimized: true,
  },
  experimental: {
    // У сайта два корневых макета (RU и EN), поэтому 404 для несуществующих адресов
    // отдаёт отдельный app/global-not-found.tsx со своим <html>
    globalNotFound: true,
  },
};

export default nextConfig;
