// Personal模块下的reducer
import { PERSONAL_AGE } from '@/store/action-types';

const initial = {
  num: 0,
  age: 16,
};
export const personalReducer = (state = initial, action) => {
  const newState = { ...state };

  if (action.type === PERSONAL_AGE) {
    newState.age = action.payload;
  }

  return newState;
};

// store.dispatch({
//   type: 'PERSON_AGE',
//   payload: 26,
// });
