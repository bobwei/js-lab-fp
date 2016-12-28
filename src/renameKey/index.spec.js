import renameKey from './index';

it('can rename key1 with key2', () => {
  const key1 = 'key1';
  const key2 = 'key2';
  const msg = 'hello world';

  expect(renameKey(key1)(key2)({
    [key1]: msg,
  }))
    .toEqual({
      [key2]: msg,
    });
});
