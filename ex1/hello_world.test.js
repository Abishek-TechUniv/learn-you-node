const helloWorld = require('./hello_world');

global.console = { log: jest.fn() };

test('should return HELLO WORLD to the console', () => {
  helloWorld();
  expect(console.log).toBeCalledWith('HELLO WORLD');
});
