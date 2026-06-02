/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.21.156"],
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/design-system",
        destination: "/design-system/colors",
        permanent: true,
      },

      {
        source: "/emails",
        destination: "/emails/flight",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
