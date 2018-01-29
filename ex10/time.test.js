const { leftPad, now } = require('./time');

describe('check the functions', () => {
  it('should left pad 1 to 01', () => {
    expect(leftPad(1)).toBe('01');
  });

  it('should return date string', () => {
    expect(now()).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/);
  });
});
