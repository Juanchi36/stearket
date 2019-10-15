var express = require('express');
var app = express();
var getSteam = require('./get-steam').getSteam;

app.get('/', function (req, res) {
	getSteam().then(function (data) {
		res.send(data);
	});
});

app.listen(4000, function () {
	console.log('Example app listening on port 4000!');
});
