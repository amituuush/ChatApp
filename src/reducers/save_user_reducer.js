import { SAVE_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  name: '',
  avatarUrl: ''
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SAVE_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
  }
  return state;
}