var express = require('express');

var app = express();


app.get('/help', function(req, res){
	res.send('There is no help');
});

app.use('/', function(req, res){
	res.redirect('https://goo.gl');
});

app.listen(3000);
console.log('Server running on http://localhost:3000');

module.exports = app;
