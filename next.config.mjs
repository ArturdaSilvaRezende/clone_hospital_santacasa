/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.santacasago.org.br',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
