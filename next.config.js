const withSass = require('@zeit/next-sass');
module.exports = withSass({
  serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
    seedorfGraphQLUrl: 'http://localhost:8080/https://api.sportyspots.com/graphql',
    seedorfHost: 'https://api.sportyspots.com',
    googleMapsKey: process.env.GOOGLE_MAPS_KEY,
  },
  env: {
    seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
  },
});

// const withImages = require('next-images')
// module.exports = withImages()
