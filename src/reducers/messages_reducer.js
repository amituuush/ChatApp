import { FETCH_MESSAGES, SEND_MESSAGE } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case SEND_MESSAGE:
      return state.concat(action.payload);
  }
  return state;
}