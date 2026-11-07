/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: '/logo/snmz-logo.png',
        destination: '/images/brand/snmz-logo.png',
      },
      {
        source: '/logo/snmz-logo.png.png',
        destination: '/images/brand/snmz-logo.png',
      },
    ];
  },
};

export default nextConfig;
