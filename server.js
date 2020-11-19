const express = require('express');
const app = express();

app.use(express.static('./dist/panel-frontend'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/panel-frontend/' })
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Frontend server running on port %d', port));
