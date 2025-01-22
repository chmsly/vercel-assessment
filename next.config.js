/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
    ],
  },
  eslint: {
    // Only use this if you're okay with disabling this rule
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 