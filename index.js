var _ = require('lodash'),
	request = require('request');

var DockerRegistry = function(opts) {
	this.API_URL = opts.apiUrl || 'https://registry.hub.docker.com/v1/';
};

DockerRegistry.prototype.search = function(searchTerm, cb) {
	var searchTermEnc = encodeURIComponent(searchTerm);
	request.get('/v1/search?q=' + searchTermEnc, function(err, res, body) {
		cb(err, body);
	});
};