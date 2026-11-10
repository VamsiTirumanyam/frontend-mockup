import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      basePath: "/frontend-mockup",
    }
  : {};

export default nextConfig;
