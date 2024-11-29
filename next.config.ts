import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
