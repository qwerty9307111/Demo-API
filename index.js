const path = require('path');
const express = require('express');
const app = express();
const port = 9999

var testRouter = require('./request');
app.use('/api', testRouter);

app.use('/static', express.static(path.join(__dirname, 'docs')));

app.listen(port, () => console.log('http://localhost:' + port + '/static/index.html'));
