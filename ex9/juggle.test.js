const collect = require('./juggle');

describe('When passed three http url', () => {
  test('should return the html data when correct url passed', (done) => {
    const call = (data) => {
      expect(data).toMatch('<!doctype html>');
      done();
    };
    collect(['http://www.example.com', 'http://www.example.com', 'http://www.example.com'], call);
  });

  // test('should return error when wrong url passed', (done) => {
  //   const call = (data) => {
  //     expect(data).toThrow();
  //     done();
  //   };
  //   collect(['http://httpstat.us/404', 'http://httpstat.us/404', 'http://httpstat.us/404'], call);
  // });
});
