const request = require('./http');

describe('get request from correct ', () => {
  it('should return result', (done) => {
    const call = (data) => {
      expect(data).toBe('Ok');
      done();
    };
    request('http://www.example.com', call);
  });

  it('should return error if wrong', (done) => {
    const call = (data) => {
      expect(data).toBe('Error');
      done();
    };
    request('http://htt.us/404', call);
  });
});
