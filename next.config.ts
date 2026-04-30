import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/how-to-create-a-great-digital-prototype',
        destination: '/blog/5-day-prototype-custom-software',
        permanent: true,
      },
      {
        // Legacy Framer case study URL surfaced as a 404 in Google Search
        // Console. The specific hotel/hospitality case study isn't carried
        // on the new site, so redirect to the work index.
        source: '/client-case-study-hotel-hospitality-digital-development',
        destination: '/work',
        permanent: true,
      },
    ];
  },

  // Ensure trailing slashes match Framer behavior
  trailingSlash: false,
};

export default nextConfig;
