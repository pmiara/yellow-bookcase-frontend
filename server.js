const express = require('express');

function enforceHTTPS(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const app = express();
app.use(enforceHTTPS);
app.use(express.static('./dist/panel-frontend'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/panel-frontend/' })
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Frontend server running on port %d', port));
