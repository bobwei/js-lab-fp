/* eslint-disable import/prefer-default-export */
import R from 'ramda';

/*
  q1, can list all names of listing
*/
export const getNames = R.pipe(
  R.path(['results_json', 'search_results']),
  R.map(R.path(['listing', 'name'])),
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
