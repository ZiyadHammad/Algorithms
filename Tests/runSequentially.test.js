const runSequentially = require('../JavaScript/runSequentially'); 

let counter;

function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}

function failAsync() {
  return new Promise((resolve, reject) => {
    reject('Failed');
  });
}

beforeEach(() => {
  // Reset counter before each test
  counter = 0;
});

test('Runs functions sequentially and resolves with an array of results', async () => {
  const result = await runSequentially([incrementCounterAsync, incrementCounterAsync]);
  expect(result).toEqual([1, 2]);
});

test('Rejects if any function in the sequence fails', async () => {
  expect.assertions(1);
  try {
    await runSequentially([incrementCounterAsync, failAsync, incrementCounterAsync]);
  } catch (error) {
    expect(error).toBe('Failed');
  }
});

test('Handles an empty array of functions', async () => {
  const result = await runSequentially([]);
  expect(result).toEqual([]);
});

test('Handles a single function in the array', async () => {
  const result = await runSequentially([incrementCounterAsync]);
  expect(result).toEqual([1]);
});

test('Rejects if the first function fails', async () => {
  expect.assertions(1);
  try {
    await runSequentially([failAsync, incrementCounterAsync]);
  } catch (error) {
    expect(error).toBe('Failed');
  }
});
