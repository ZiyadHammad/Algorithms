const minimalNumberOfPackages = require('../JavaScript/minimalNumberOfPackages')

test('Returns minimal number of packages needed for x number of items', () => {
  expect(minimalNumberOfPackages(13, 3, 10)).toBe('3 large packages are needed for 13 items')
})

test('Returns minimal number of packages needed for x number of items', () => {
  expect(minimalNumberOfPackages(12, 2, 5)).toBe('2 large & 2 small packages are needed for 12 items');
});

test('Returns minimal number of packages needed for x number of items', () => {
  expect(minimalNumberOfPackages(30, 10, 1)).toBe('6 large packages are needed for 30 items');
});

test('Returns minimal number of packages needed for x number of items', () => {
  expect(minimalNumberOfPackages(25, 1, 20)).toBe('1 large & 20 small packages are needed for 25 items');
});

test('Returns minimal number of packages needed for x number of items', () => {
  expect(minimalNumberOfPackages(100, 1, 20)).toBe(-1);
});