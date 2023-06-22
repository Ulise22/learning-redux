/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elterritorio1.cdn.net.ar',
        port: '',
        pathname: '/252/elterritorio1/images/27/60/276030_d028a1682f90cceba23c291b891499ad21f201dbabfce0c78e027b5fc9325811/lg'
      }
    ],
    domains: ['elterritorio1.cdn.net.ar', 'smarts.com.ar', 'media01.farmaciaslider.com.ar']
  }
}

module.exports = nextConfig
