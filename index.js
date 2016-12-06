import R from 'ramda';
import _ from 'lodash/fp';

/*
  q1, can list all names of listing
*/
export const names = R.pipe(
  R.path(['results_json', 'search_results']),
  R.map(R.path(['listing', 'name'])),
);

/*
  q2, can list all names of listing where its primary_host.is_superhost is true
*/

export const superhostNames = R.pipe(
  R.path(['results_json', 'search_results']),
  R.filter(R.pathEq(['listing', 'primary_host', 'is_superhost'], true)),
  R.map(R.path(['listing', 'name'])),
);

export const path = R.split('.');

export const query = where => (
  R.pipe(
    R.toPairs,
    R.map(([key, { op, val }]) => R[op](path(key), val)),
    R.allPass,
  )(where)
);

export const filterWithQuery = (where, mapper = R.map(R.path(['listing', 'name']))) => (
  R.pipe(
    R.path(['results_json', 'search_results']),
    R.filter(query(where)),
    mapper,
  )
);

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
