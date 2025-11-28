import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily disabled for maintenance page
  // Re-enable when ready to launch full site
  // output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If your repo is username.github.io, comment out the basePath line below
  // If your repo is named something else (e.g., portfolio), uncomment and use:
  // basePath: '/repository-name',
};

export default nextConfig;
