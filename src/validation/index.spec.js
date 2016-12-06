import R from 'ramda';

import { validate } from './index';

it('validate function does work', () => {
  const data = {
    name: 'Bob',
    age: 28,
    color: 'red',
    friends: [{
      name: 'zuckerberg',
    }],
    home: {
      address: '',
    },
  };
  const requiredMsg = 'required';
  expect(validate(R._, 'home.address', data)).toEqual(requiredMsg);
});
