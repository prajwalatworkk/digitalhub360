/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // /contact was replaced by /branches — keep old links and search results working.
      {
        source: "/contact",
        destination: "/branches",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
