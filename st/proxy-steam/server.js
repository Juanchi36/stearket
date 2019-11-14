// var express = require('express');
// var app = express();
// var getSteam = require('./get-steam').getSteam;
// var postSearch = require('./get-steam').postSearch;

// app.get('/', function (req, res) {
// 	getSteam().then(function (data) {
// 		res.send(data);
// 	});
// });
// app.post('/', function (req, res) {
// 	postSearch().then(function (data) {
// 		res.send(data);
// 	});
// });

// app.listen(4000, function () {
// 	console.log('Example app listening on port 4000!');
// });
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/post', (req, res) => {
  request(
    { url: 'http://localhost:9001/search?userEmail=cacho@gmail.com&gameName=MonsterUniversity' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));