import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    // We only need to prepend the files with variables and mixins.
    prependData: `
      @import "abstracts/tokens";
      @import "abstracts/mixins";
    `,
  },
};

export default nextConfig;
