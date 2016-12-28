import R from 'ramda';

import input from './input.json';
import expectedResult from './expectedResult.json';
import { mapper } from './index';

it('can map input to expectedResult with mapper function', () => {
  /*
    mapping => targetPath: valuePath
    ex:
      const mapping = {
        'US.country': 'c',
        'US.currency': 'currency.name',
        'US.exchangeRate': 'currency.exRate',
        'US.minimum': 'currency.minimum',
        'US.minUnit': 'currency.minUnit',
      };
      will map to
      { US:
       { minUnit: 0.01,
         minimum: 0.99,
         exchangeRate: 1,
         currency: 'USD',
         country: 'US' } }
  */
  const mapping = {
    country: 'c',
    currency: 'currency.name',
    exchangeRate: 'currency.exRate',
    minimum: 'currency.minimum',
    minUnit: 'currency.minUnit',
  };
  const result = R.pipe(
    R.map(mapper(mapping)),
    R.reduce(R.merge, {}),
  )(input);
  expect(result).toEqual(expectedResult);
});
