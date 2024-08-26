/** @type {import('next').NextConfig} */


// to add images form any cloud platform we have to add images configuration

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly"
      },
    ],
  },
};

module.exports = nextConfig;
