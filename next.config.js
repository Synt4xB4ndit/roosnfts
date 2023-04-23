/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};


module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    } , 
    nextConfig
};
