const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const port = 8080;

app.use(express.static(path.join(__dirname + '/../client')));

app.use(cors());

app.use('/photoGallery', createProxyMiddleware({
  target: `http://localhost:3003`,
  changeOrigin: true
}));


app.use('/checkout', createProxyMiddleware({
  target: `http://localhost:4000`,
  changeOrigin: true
}));


// app.use('/reviews', createProxyMiddleware({
//   target: `http://localhost:3000`,
//   pathRewrite: {'/reviews': '/'},
//   changeOrigin: true
// }));
// app.use('/reviews', createProxyMiddleware({
//   target: `http://localhost:3000`,
//   changeOrigin: true
// }))


app.use('/explorethis', createProxyMiddleware({
  target: `http://localhost:3141`,
  changeOrigin: true
}));

// app.use('/users/:userId', createProxyMiddleware({ target: `http://localhost:3141`, changeOrigin: true}));

app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
})