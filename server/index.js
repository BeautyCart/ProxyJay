const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const port = 8080;

app.use('/:productId', express.static(path.join(__dirname + '/../client')));

app.use(cors());

app.use('/photoGallery', createProxyMiddleware({
  target: `http://13.57.199.50`,
  changeOrigin: true
}));


app.use('/checkout', createProxyMiddleware({
  target: `http://54.193.123.212`,
  changeOrigin: true
}));


app.use('/explorethis', createProxyMiddleware({
  target: `http://100.25.139.226`,
  changeOrigin: true
}));


app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
})