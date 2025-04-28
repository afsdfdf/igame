/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  transpilePackages: [
    '@radix-ui',
    'cmdk',
    'vaul',
    'framer-motion'
  ],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': 'react',
      'react-dom': 'react-dom'
    };
    
    return config;
  }
}

export default nextConfig
