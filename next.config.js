const withSass = require('@zeit/next-sass');
module.exports = withSass({
  serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  env: {
    seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
    googleMapsAPIKey: 'AIzaSyC99uVW_9nOJ32T7BY3Yeqt0iMWqOrGuAQ',
  },
});

// const withImages = require('next-images')
// module.exports = withImages()
