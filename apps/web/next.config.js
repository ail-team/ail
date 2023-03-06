/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  experimental: {
    esmExternals: false,
    appDir: true,
  },
};

module.exports = nextConfig;
