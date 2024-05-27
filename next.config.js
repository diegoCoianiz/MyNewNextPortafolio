/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', "cdn-icons-png.flaticon.com", "scontent.cdninstagram.com", "www.instagram.com", "socket.io", "play-lh.googleusercontent.com", "media.licdn.com"]
  },
}

module.exports = nextConfig
