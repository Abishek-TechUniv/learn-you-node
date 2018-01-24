const calculate = require('./sync.js');

const file1 = './ex3/emptyFile';

test('should return zero for an empty file', () => {
  expect(calculate(file1)).toBe(0);
});

test('should return an integer', () => {
  expect(typeof calculate(file1)).toBe('number');
});
