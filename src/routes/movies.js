var movies = require('../fixtures/movies');

/**
* GET - movies
* This is the only GET API the server responds with. It returns movies from a static file in JSON.
*/
module.exports = [
  {
    method: 'GET',
    path: '/v1/api/movies',
    handler: function (req, reply) {
      reply(movies);
    }
  },
];
