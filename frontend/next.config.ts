import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // ビルド時に静的エクスポートする
  trailingSlash: true,   // （必要に応じて）末尾にスラッシュを付与
};

export default nextConfig;
