const path = require('path');

const nextConfig = {
  output: 'export', // Xuất tĩnh để deploy lên GitHub Pages
  images: {
    unoptimized: true, // Tắt tối ưu ảnh vì GitHub Pages không hỗ trợ Image Optimization
    domains: [
      'media.dev.to',
      'avatars.githubusercontent.com',
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'stardev.io',
      'github-profile-summary-cards.vercel.app',
      'github-profile-trophy.vercel.app'
    ],
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true, // Bắt buộc để GitHub Pages có thể tìm đúng file
};

module.exports = nextConfig;
