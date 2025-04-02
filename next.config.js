/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/lab8-routing' : '', // Set basePath to repo name for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab8-routing' : '', // Set asset prefix to repo name for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with Next.js
  },
  trailingSlash: true, // Add trailing slashes for consistent paths
};

module.exports = nextConfig;
