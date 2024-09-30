module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en-us',
        permanent: true,
      },
    ]
  },
}