const numberOfLines = require('./async');

global.console = { log: jest.fn() };

describe('when passed a file', () => {
  it('should return 0 if file empty', (done) => {
    const call = (data) => {
      expect(data).toBe(0);
      done();
    };
    numberOfLines('./misc/EmptyFile.txt', call);
  });

  it('should return number of lines if file not empty', (done) => {
    const call = (data) => {
      expect(data).toBe(4);
      done();
    };
    numberOfLines('./misc/nonEmptyFile.txt', call);
  });

  it('should return error code if file doesn\'t exist', (done) => {
    const call = (data) => {
      expect(data).toBe('ENOENT');
      done();
    };
    numberOfLines('./misc/nonExistent', call);
  });
});
