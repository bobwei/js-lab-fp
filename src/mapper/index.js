import R from 'ramda';

export const mapper = R.curry(
  (mapping, from, to) => {
    return R.pipe(
      R.always(mapping),
      R.toPairs,
      R.map(
        R.map(R.split('.')),
      ),
      R.map(
        R.adjust(R.path(R.__, from), 1),
      ),
      R.map(R.partial(R.assocPath)),
      R.apply(R.compose),
    )()(to);
  },
);
