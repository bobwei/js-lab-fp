import R from 'ramda';
import _ from 'lodash/fp';

export const required = [
  [R.isNil, R.always('required')],
  [R.isEmpty, R.always('required')],
];

export const validate = R.curry((conds = required, key, obj) => (
  R.pipe(
    _.get(key),
    R.cond(conds),
  )(obj)
), 3);
