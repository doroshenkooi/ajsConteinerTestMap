import errorRepository from './src/errorRepository';

test('translate should return error message for known error code', () => {
  const repository = new errorRepository();
  expect(repository.translate(500)).toBe('Internal Server Error');
  expect(repository.translate(404)).toBe('Not Found');
  expect(repository.translate(400)).toBe('Bad Request');
});

test('translate should return "unknown error" for unknown error code', () => {
  const repository = new errorRepository();
  expect(repository.translate(999)).toBe('unknown error');
});