/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/hammer147/os-blog-posts/main/images/**',
      },
    ],
  }
}

module.exports = nextConfig
