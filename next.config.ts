import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Netlify deployment with @netlify/plugin-nextjs
  // Do NOT use output: 'export' — we have API routes which need server-side rendering
  images: {
    // Allow images from the live site (used in some trek detail pages)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "himalayanwarrior.com",
      },
    ],
    // Netlify supports Next.js Image Optimization via the plugin
    unoptimized: false,
  },
  // Ensure trailing slashes are consistent for Netlify routing
  trailingSlash: false,
};

export default nextConfig;
