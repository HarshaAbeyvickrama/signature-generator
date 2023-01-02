/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harshaabeyvickrama.github.io',
        port: '',
        pathname: '/public/assets/**',
      },
    ],
  }
}

module.exports = nextConfig
