const express = require('express');

const app = express();

app.use(express.static('./dist/panel-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/panel-frontend/' }),
);

app.listen(process.env.PORT || 8080);