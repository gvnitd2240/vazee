/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ disables image optimization for static export,
    domains: ['example.com']
  },
};

export default nextConfig;
