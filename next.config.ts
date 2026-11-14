import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPagesBuild ? "/frontend-mockup" : "";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      basePath,
      env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
      },
    }
  : {};

export default nextConfig;
