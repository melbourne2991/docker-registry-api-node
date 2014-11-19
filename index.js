var _ = require('lodash'),
	request = require('request');

var DockerRegistry = function(opts) {
	var opts = opts || {};
	this.API_URL = opts.apiUrl || 'https://index.docker.io/v1/';
};

DockerRegistry.prototype.search = function(searchTerm, cb) {
	var query = this.API_URL + 'search?q=' + encodeURIComponent(searchTerm);
	console.log(query)
	request.get(query, function(err, res, body) {
		cb(err, body);
	});
};

module.exports = new DockerRegistry();


