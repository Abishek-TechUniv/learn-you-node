const filteredList = require('./filtered_module');
const printer = require('./printer');

global.console = {
  log: jest.fn(),
};

describe('when passed with a dirname and extension', () => {
  it('should return everything if no extension passed', (done) => {
    const call = (error, data) => {
      const output = ['emptyFile.txt', 'nonEmptyFile.txt', 'my.js'].sort();
      expect(data.sort()).toEqual(output);
      done();
    };
    filteredList('./misc', '', call);
  });

  it('should return js files if js passed', (done) => {
    const call = (error, data) => {
      const output = ['my.js'].sort();
      expect(data.sort()).toEqual(output);
      done();
    };
    filteredList('./misc', 'js', call);
  });
});

describe('when passed a wrong parameter', () => {
  it('should return error code when directory doesn\'t exist', (done) => {
    const call = (error) => {
      expect(error.code).toEqual('ENOENT');
      done();
    };
    filteredList('./nonExist', 'js', call);
  });

  it('should return empty array when extension is not present', (done) => {
    const call = (error, data) => {
      expect(data.sort()).toEqual([]);
      done();
    };
    filteredList('./misc', 'ts', call);
  });
});

describe('The printer function should work properly', () => {
  it('should return correct value', (func) => {
    const call = (data) => {
      expect(data).toBe('my.js');
      func();
    };
    printer('./misc', 'js', call);
  });

  it('should return error value', (func) => {
    const call = (error) => {
      expect(error).toBe('ENOENT');
      func();
    };
    printer('./nonExist', 'js', call);
  });
});

