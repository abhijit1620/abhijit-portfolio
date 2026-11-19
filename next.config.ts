import type { NextConfig } from "next";

// GitHub Pages serves the site from /abhijit-portfolio and needs plain static files.
// The Pages workflow sets GITHUB_PAGES=true; local dev and other hosts build as usual.
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/abhijit-portfolio" : "";

const nextConfig: NextConfig = {
  ...(pages ? { output: "export" as const, basePath, trailingSlash: true } : {}),
  images: { unoptimized: pages },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
