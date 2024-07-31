/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logowik.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'styles.redditmedia.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
