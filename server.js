var express = require('./config/express');

var app = express();

app.listen(3031);

module.exports = app;

console.log('Server running at http://localhost:3031/');
