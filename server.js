'use strict';

const Hapi = require('hapi');
const routes = require('./src/routes');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8001,
    routes: { cors: true }
});

routes.forEach( ( route ) => {
  server.route( route );
} );

if (!module.parent) {
	server.start((err) => {
		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
}

module.exports = server;
