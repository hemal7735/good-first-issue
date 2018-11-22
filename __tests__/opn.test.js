var opn = require('opn');

test('if opn is mocked', () => {
  console.log(opn);
  opn("https://www.google.com");

  expect(opn).toHaveBeenCalledWith('https://www.google.com');
});