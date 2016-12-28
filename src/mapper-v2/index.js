/* eslint-disable no-underscore-dangle, import/prefer-default-export */
import R from 'ramda';

export const mapper = R.curry(
  (mapping, input) => (
    R.pipe(
      R.always(mapping),
      R.toPairs,
      R.map(
        R.map(R.split('.')),
      ),
      R.map(
        ([keyPath, valuePath]) => [
          [R.prop('c')(input), ...keyPath],
          R.path(valuePath)(input),
        ],
      ),
      R.map(R.partial(R.assocPath)),
      R.apply(R.compose),
    )()({})
  ),
);
