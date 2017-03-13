import { SELECT_CURRENT_ROOM } from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case SELECT_CURRENT_ROOM:
      return action.payload;
  }
  return state;
}