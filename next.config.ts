import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project covers in /public/projects are SVG illustrations.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
