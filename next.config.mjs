/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website-public" : "";

const nextConfig = {
  agentRules: false,
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
