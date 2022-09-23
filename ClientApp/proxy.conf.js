const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:7744';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_framework",
      "/_content",
      "/_blazor"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    ws: true
  }
]

module.exports = PROXY_CONFIG;
