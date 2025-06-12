import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;

// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
