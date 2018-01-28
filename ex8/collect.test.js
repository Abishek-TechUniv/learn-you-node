const collect = require('./collect');

describe('when given a URL', () => {
  it('should give correct value if passed a valid url', (done) => {
    const call = (data) => {
      expect(data).toMatch('1270');
      done();
    };
    collect('http://example.com', call);
  });

  it('should give error if passed an ivalid url', (done) => {
    const call = (data) => {
      expect(data).toMatch('404 Not Found');
      done();
    };
    collect('http://httpstat.us/404', call);
  });
});
