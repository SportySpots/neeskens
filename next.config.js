const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  },
  // serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  // },
  env: {
    seedorfGraphQLUrl: 'http://localhost:8080/https://api.sportyspots.com/graphql',
    // seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
    googleMapsAPIKey: 'AIzaSyC99uVW_9nOJ32T7BY3Yeqt0iMWqOrGuAQ',
    googleAnalyticsID: 'UA-110079868-1',
  },
}));

// const withImages = require('next-images')
// module.exports = withImages()
