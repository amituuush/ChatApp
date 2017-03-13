import { SAVE_USER, LOGOUT_USER } from '../actions/types';

export default function (state = '', action) {
  switch(action.type) {
    case SAVE_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
  }
  return state;
}