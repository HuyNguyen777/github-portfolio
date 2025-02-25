const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'github-portfolio'; // Tên repository của bạn

module.exports = {
  output: 'export',
  trailingSlash: true, // Để tránh lỗi 404 trên GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : '', // Fix lỗi CSS bị thiếu trên GitHub Pages
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'media.dev.to',
      'avatars.githubusercontent.com',
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'stardev.io',
      'github-profile-summary-cards.vercel.app',
      'github-profile-trophy.vercel.app',
    ],
    dangerouslyAllowSVG: true,
  },
};
