const sum = require('./baby');

test('should return a number', () => {
  expect(typeof sum([1, 2, 3, 4])).toBe('number');
});

test('should return the sum of the array', () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});

test('should return 0 if nothing passed', () => {
  expect(sum()).toBe(0);
});
