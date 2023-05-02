/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
