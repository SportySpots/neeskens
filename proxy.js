// Listen on a specific host via the HOST environment variable
const host = process.env.PROXY_HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PROXY_PORT || 8080;

const corsProxy = require('cors-anywhere');

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});
