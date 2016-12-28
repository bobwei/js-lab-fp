import R from 'ramda';

/*
  Suppose that we want to renameKey
  from
  {
    key1: value,
  }
  to
  {
    key2: value
  }
*/

const renameKey = key1 => key2 =>
  R.compose(
    R.dissoc(key1),
    R.converge(
      R.assoc(key2),
      [
        R.prop(key1),
        R.identity,
      ],
    ),
  );

export default renameKey;
