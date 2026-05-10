/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.santacasago.org.br',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'uytdqrjpaiatlyeyjasi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ]
  }
}

export default nextConfig
