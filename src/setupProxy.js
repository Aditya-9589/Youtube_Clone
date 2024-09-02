const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://youtube.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove '/api' from the request path
      },
    })
  );
};
