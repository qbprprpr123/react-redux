// Vote模块下的reducer

import { VOTE_SUP, VOTE_OPP } from '@/store/action-types';

const initial = {
  supNum: 10,
  oppNum: 5,
};
export const voteReducer = (state = initial, action) => {
  const newState = { ...state };

  if (action.type === VOTE_SUP) {
    newState.supNum++;
  }
  if (action.type === VOTE_OPP) {
    newState.oppNum++;
  }
  return newState;
};
