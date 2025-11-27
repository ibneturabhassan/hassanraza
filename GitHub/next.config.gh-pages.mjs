import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // If deploying to a subpath (e.g., username.github.io/repo-name), uncomment and set:
  //basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {},
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd()),
    }
    return config
  },
}

export default nextConfig

