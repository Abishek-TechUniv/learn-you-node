const filteredList = require('./filtered');

describe('when passed with a dirname and extension', () => {
  it('should return everything if no extension passed', (done) => {
    const call = (data) => {
      const output = ['emptyFile.txt', 'nonEmptyFile.txt', 'my.js'].sort();
      expect(data.sort()).toEqual(output);
      done();
    };
    filteredList('./misc', '', call);
  });

  it('should return js files if js passed', (done) => {
    const call = (data) => {
      const output = ['my.js'].sort();
      expect(data.sort()).toEqual(output);
      done();
    };
    filteredList('./misc', 'js', call);
  });
});

describe('when passed a wrong parameter', () => {
  it('should return error code when directory doesn\'t exist', (done) => {
    const call = (data) => {
      expect(data).toEqual('ENOENT');
      done();
    };
    filteredList('./nonExist', 'js', call);
  });

  it('should return empty array when extension is not present', (done) => {
    const call = (data) => {
      expect(data.sort()).toEqual([]);
      done();
    };
    filteredList('./misc', 'ts', call);
  });
});
