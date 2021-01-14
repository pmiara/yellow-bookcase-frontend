const express = require('express');

function enforceHTTPS(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const appDirectory = 'dist/yellow-bookcase';
const port = process.env.PORT || 8080;

const app = express();

app.use(enforceHTTPS);
app.get("*.*", express.static(appDirectory));

app.all("*", (req, res) =>
  res.status(200).sendFile('/', { root: appDirectory })
);


app.listen(port, () => console.log('Frontend server running on port %d', port));
