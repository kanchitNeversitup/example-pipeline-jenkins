const func = require('./functions')

test('adds 1 + 2 to equal 3', () => {
  expect(func.add(1, 2)).toBe(3);
});