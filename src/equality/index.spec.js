import R from 'ramda';
import shallowEqual from 'recompose/shallowEqual';

it('test R.equals', () => {
  const objs = [{ user: { name: 'bob' } }, { user: { name: 'bob' } }];
  const result = R.apply(R.equals, objs);
  expect(result).toBe(true);
});

it('test R.pick shape', () => {
  const obj = { user: { name: 'bob' } };
  R.compose(
    expect,
    R.equals(obj),
    R.pick(['user']),
  )(obj).toBe(true);
});

it('test R.pick reference', () => {
  const obj = { user: { name: 'bob' } };
  expect(
    shallowEqual(
      R.pick(['user'], obj),
      obj,
    ),
  ).toBe(true);
});
