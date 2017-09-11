import test from 'ava';
import server from '../server';
var movies = require('../src/fixtures/movies');

const requestDefaults = {
  method: 'GET',
  url: '/v1/api/movies',
};

test('endpoint test | GET /movies -> 200 OK', t => {
  const request = Object.assign({}, requestDefaults, {});

  return server.inject(request)
    .then(response => {
      t.is(response.statusCode, 200, 'status code is 200');
    });
});

test('endpoint test | GET /movies -> 200 Response returns Movies OK', t => {
  const request = Object.assign({}, requestDefaults, {});

  return server.inject(request)
    .then(response => {
      t.is(response.result, movies, 'response equals movies fixture');
    });
});
