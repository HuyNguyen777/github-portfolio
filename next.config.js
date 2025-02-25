const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'github-portfolio'; // Đổi thành tên repo của bạn

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tự động export mà không cần `next export`
  trailingSlash: true, // Fix lỗi 404 trên GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : "", // Fix lỗi CSS không load trên GitHub Pages
  images: {
    unoptimized: true, // Fix lỗi ảnh trên GitHub Pages
    domains: [
      "media.dev.to",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "stardev.io",
      "github-profile-summary-cards.vercel.app",
      "github-profile-trophy.vercel.app"
    ],
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
