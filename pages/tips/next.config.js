const { TIPS_URL } = process.env

module.exports = {
  basePath: "./tips",
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/tips',
        destination: `${TIPS_URL}/tips`,
      },
      {
        source: '/tips/:path*',
        destination: `${TIPS_URL}/tips/:path*`,
      },
    ]
  },
}
