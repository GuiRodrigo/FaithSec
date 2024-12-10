/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "api.blackpass.com.br",
      "api.intranet.com.br",
      "apibp.intranet.com.br",
      "apibp.blackpass.pve2.mycore.dev.br",
      "api.blackpass.pve2.mycore.dev.br",
    ],
  },
};

export default nextConfig;
