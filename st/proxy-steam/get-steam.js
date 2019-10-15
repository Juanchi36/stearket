var http = require('http');

function getSteam () {
	return new Promise(function (resolve, reject) {
		var options = {
			hostname: 'api.steampowered.com',
			port: 80,
			path: '/ISteamApps/GetAppList/v0002/?format=json',
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};

		var req = http.request(options, function (res) {
			res.setEncoding('utf8');
			res.on('data', function (data) {
				resolve(data); // I can't parse it because, it's a string. why?
			});
		});
		req.on('error', function (e) {
			reject('problem with request: ' + e.message);
		});
		req.end();
	});
}

module.exports = {
	getSteam: getSteam
};
