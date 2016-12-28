import { mapper } from './index';

const input = JSON.parse(`
  {
    "c": "US",
    "defaultLang": "en",
    "defaultLocale": "en-US",
    "currency": {
      "name": "USD",
      "exRate": 1,
      "minimum": 0.99,
      "minUnit": 0.01
    }
  }
`);
const expectedResult = JSON.parse(`
  {
    "US": {
      "country": "US",
      "currency": "USD",
      "exchangeRate": 1,
      "minimum": 0.99,
      "minUnit": 0.01
    }
  }
`);

it('can map from input to output with mapping rules', () => {
  const mapping = {
    'US.country': 'c',
    'US.currency': 'currency.name',
    'US.exchangeRate': 'currency.exRate',
    'US.minimum': 'currency.minimum',
    'US.minUnit': 'currency.minUnit',
  };
  const result = mapper(mapping)(input)({});
  expect(result).toEqual(expectedResult);
});
