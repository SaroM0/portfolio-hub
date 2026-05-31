/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  transpilePackages: ['framer-motion'],
};

module.exports = nextConfig;
