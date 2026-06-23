import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // IMPORTANT: Do NOT set output: 'export' — this project has API routes
  // which require server-side rendering. Netlify handles this via
  // @netlify/plugin-nextjs (Edge Functions).
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "himalayanwarrior.com",
      },
    ],
  },
  // Consistent URLs — no trailing slashes (e.g., /treks not /treks/)
  trailingSlash: false,
};

export default nextConfig;
