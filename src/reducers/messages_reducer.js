import { FETCH_MESSAGES } from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload;
  }
  return state;
}