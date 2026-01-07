/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize font loading
  optimizeFonts: true,
  // Compress output
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;