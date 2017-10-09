import http from 'http';

import '../src/app.js';

describe('Example Node Server', () => {
  test('It should return the GET method', done => {
    http.get('http://127.0.0.1:1337', res => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});