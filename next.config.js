/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    turbo: {
      loaders: {
        '.scss': ['sass-loader', "style-loader",
          "css-loader"],
      }
    },
    optimizeCss: true,
  },
}

module.exports = nextConfig
