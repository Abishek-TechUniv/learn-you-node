const calculate = require('./sync.js');

const file1 = './misc/emptyFile.txt';
const file2 = './misc/nonEmptyFile.txt';

test('should return zero for an empty file', () => {
  expect(calculate(file1)).toBe(0);
});

test('should return lines for a non empty file', () => {
  expect(calculate(file2)).toBe(4);
});

test('should return an integer', () => {
  expect(typeof calculate(file1)).toBe('number');
});
