/* eslint-disable import/prefer-default-export */
import R from 'ramda';

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

/*
  path = 'results_json.search_results[0].listing.name'

  path2 = 'results_json.search_results[0][0].listing.name'
  => (
    R.path(['results_json', 'search_results']),
    R.nth(0),
    R.nth(0),
    R.path(['listing', 'name']),
  )
*/
